export function areDepsEqual<Deps extends any[]>(
  deps: Deps | null | undefined,
  prevDeps: Deps | null | undefined
): boolean {
  return Boolean(
    deps &&
      prevDeps &&
      (deps === prevDeps || (deps.length === prevDeps.length && deps.every((_, i) => _ === prevDeps[i])))
  );
}
