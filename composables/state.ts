export const useMode = (): globalThis.Ref<string> =>
  useState<string>('mode', () => 'light');
