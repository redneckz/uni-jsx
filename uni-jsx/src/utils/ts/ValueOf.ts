export type ValueOf<R extends Record<string, any>> = R[keyof R];
