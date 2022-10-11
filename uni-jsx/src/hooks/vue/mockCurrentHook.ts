import { getCurrentHook } from './getCurrentHook';
import { HookState } from './HookState';

export function mockCurrentHook(): HookState {
  const hook = {
    update(_) {
      hook.state = _;
    }
  } as HookState;

  (getCurrentHook as jest.Mock).mockImplementation(initialState => {
    hook.state ||= initialState;
    return [hook];
  });

  return hook;
}
