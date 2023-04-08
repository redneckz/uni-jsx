import { useCallback, useEffect, useState } from './core';

export function useScript<NS>(globalName: string, url: string): NS | undefined {
  const [globalNS, setGlobalNS] = useState<NS | undefined>((globalThis as any)[globalName]);

  const updateGlobalNS = useCallback(() => setGlobalNS((globalThis as any)[globalName]), [globalName]);

  useEffect(() => {
    const script = globalThis.document?.getElementById(url);

    if (script) {
      if (globalName in globalThis) {
        updateGlobalNS();
      } else {
        script.addEventListener('load', updateGlobalNS);

        return () => {
          script.removeEventListener('load', updateGlobalNS);
        };
      }
    } else {
      const newScript = globalThis.document?.createElement('script');

      newScript.src = url;
      newScript.async = true;
      newScript.id = url;
      newScript.addEventListener('load', updateGlobalNS);

      globalThis.document?.head.appendChild(newScript);

      return () => {
        globalThis.document?.head.removeChild(newScript);
        setGlobalNS(undefined);
      };
    }

    return undefined;
  }, [globalName, url]);

  return globalNS;
}
