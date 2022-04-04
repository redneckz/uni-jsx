export function areDepsEqual<Deps extends any[]>(
  deps: Deps | null | undefined,
  prevDeps: Deps | null | undefined
): boolean {
  return Boolean(deps && prevDeps && (deps === prevDeps || deps.every((_, i) => _ === prevDeps[i])));
}
