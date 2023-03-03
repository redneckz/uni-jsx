export const isFilled = <T>(_: T): _ is Exclude<T, null | undefined> => _ !== null && _ !== undefined;
