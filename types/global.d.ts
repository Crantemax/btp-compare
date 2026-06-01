// types/global.d.ts
// Types globaux pour éviter les erreurs TypeScript silencieuses

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set',
    targetId: string,
    config?: Record<string, unknown>
  ) => void;
  plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
}
