type Cleanup = () => void;

export interface EventBusEmitter<EM extends Record<string, any>> {
  fire<K extends keyof EM>(type: K, event: EM[K] | null): void;
  subject<K extends keyof EM>(type: K, event: EM[K] | null): Cleanup;
}
