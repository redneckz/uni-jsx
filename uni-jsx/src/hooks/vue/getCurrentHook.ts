// @ts-ignore
import { getCurrentInstance } from 'vue';
import { HookState } from './HookState.js';

interface Hooks {
  uid: number;
  top: HookState;
  current: HookState;
  update: () => void;
}

export type ComponentInst = NonNullable<ReturnType<typeof getCurrentInstance>> & {
  _hooks?: Hooks;
};

export function getCurrentHook<S>(initialState?: S): [HookState<S>, () => void] {
  const inst = getCurrentInstance() as ComponentInst;

  if (!inst) {
    return [new HookState(inst, initialState), () => {}];
  }

  if (!inst._hooks || inst._hooks?.uid !== inst.uid) {
    inst._hooks = initHooks(inst, initialState);
    return [inst._hooks.top, inst._hooks.update];
  }

  const hooks = inst._hooks;

  if (!hooks.current.next) {
    hooks.current.next = new HookState(inst, initialState);
  }
  hooks.current = hooks.current.next;

  return [hooks.current, hooks.update];
}

function initHooks<S>(inst: ComponentInst, initialState?: S): Hooks {
  const top = new HookState(inst, initialState);

  const hooks: Hooks = {
    uid: inst.uid,
    top,
    current: top,
    update: updater(inst)
  };

  queueMicrotask(() => {
    // Last hook should reference the top one
    hooks.current.next = hooks.top;
  });

  return hooks;
}

function updater(inst: ComponentInst): () => void {
  let updateRequested = false;

  return () => {
    updateRequested = true;
    queueMicrotask(() => {
      if (!updateRequested) {
        return;
      }
      updateRequested = false;
      inst.update();
    });
  };
}
