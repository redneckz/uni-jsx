interface WatcherEvent<EM extends Record<string, any>, K extends keyof EM = keyof EM> {
  type: K;
  event: EM[K] | null;
}

export type Watcher<EM extends Record<string, any>> = (ev: WatcherEvent<EM>) => void;
export type Subscriber<Event> = (ev: Event | null) => void;
export type Unsubscribe = () => void;

export interface EventBusObservable<EM extends Record<string, any>> {
  watch(watcher: Watcher<EM>): Unsubscribe;

  subscribe<K extends keyof EM>(type: K, listener: Subscriber<EM[K]>): Unsubscribe;
}

export interface EventBusHolder<EM extends Record<string, any>> {
  readonly bus: EventBusObservable<EM>;
}
