export const isSSR = () =>
  Boolean(typeof globalThis.process === 'object' && globalThis.process && globalThis.process.version);
