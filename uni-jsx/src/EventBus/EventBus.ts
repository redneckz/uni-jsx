import type { Nullable } from '../utils/ts/Nullable';
import type { EventBusEmitter } from './EventBusEmitter';
import type { EventBusObservable, Subscriber, Watcher } from './EventBusObservable';

export class EventBus<EM extends Record<string, any>> implements EventBusObservable<EM>, EventBusEmitter<EM> {
  private watchers: Set<Watcher<EM>> = new Set();
  private subscribersMap: Partial<Record<keyof EM, Set<Subscriber<EM[keyof EM]>>>> = {};
  private subjectsStateMap: Partial<EM> = {};

  readonly emitter: EventBusEmitter<EM> = this;
  readonly observable: EventBusObservable<EM> = this;

  watch(watcher: Watcher<EM>) {
    this.watchers.add(watcher);

    return () => {
      this.watchers.delete(watcher);
    };
  }

  subscribe<K extends keyof EM>(type: K, listener: Subscriber<EM[K]>) {
    this.subscribersMap[type] ||= new Set();
    this.subscribersMap[type]?.add(listener as Subscriber<EM[keyof EM]>);

    const initialEvent = this.subjectsStateMap[type];
    initialEvent && listener(initialEvent);

    return () => {
      this.subscribersMap[type]?.delete(listener as Subscriber<EM[keyof EM]>);
    };
  }

  fire<K extends keyof EM>(type: K, event: EM[K] | null) {
    const isSubjectDeclared = type in this.subjectsStateMap;
    if (isSubjectDeclared) {
      this.subject(type, event);
    } else {
      this.fireSubscribers(type, event);
    }
  }

  subject<K extends keyof EM>(type: K, event: Nullable<EM[K]>) {
    if (this.subjectsStateMap[type] !== event) {
      this.subjectsStateMap[type] = event ?? undefined;
      this.fireSubscribers(type, event);
    }

    return () => {
      delete this.subjectsStateMap[type];
    };
  }

  private fireSubscribers<K extends keyof EM>(type: K, event: Nullable<EM[K]>) {
    for (const _ of this.subscribersMap[type] ?? []) {
      _(event ?? null);
    }
    for (const _ of this.watchers) {
      _({ type, event: event ?? null });
    }
  }
}
