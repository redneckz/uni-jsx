import { type FirstArg } from '../utils/ts/FirstArg';
import { type ValueOf } from '../utils/ts/ValueOf';

export interface Action<T extends string> {
  type: T;
}

type Options<O extends Record<string, any>> = keyof O extends never ? object : O;

export type ActionsMap<HandlersMap extends Record<string, (arg: any) => void>> = ValueOf<{
  [T in keyof HandlersMap]: Options<FirstArg<HandlersMap[T]>> & {
    type: T;
  };
}>;
