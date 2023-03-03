import type { ComponentInst } from './getCurrentHook';

type Updater<S> = S | ((prev?: S) => S);

export class HookState<S = any> {
  next?: HookState;

  constructor(public readonly inst: ComponentInst, public state?: S) {
    this.update = this.update.bind(this);
  }

  update(_: Updater<S>): void {
    const oldState = this.state;
    this.state = _ instanceof Function ? _(oldState) : _;

    if (oldState !== this.state) {
      this.inst?._hooks?.update();
    }
  }
}
