export type FirstArg<F extends (...args: any[]) => any> = Parameters<F>[0];
