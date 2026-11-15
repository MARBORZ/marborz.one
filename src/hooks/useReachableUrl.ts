import { useEffect, useState } from "react";

const PING_TIMEOUT_MS = 3000;

// Resolves when the host answers at all. no-cors hides the status code,
// so this catches a dead domain, DNS failure or timeout, not a 404/500.
const pingUrl = async (url: string) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PING_TIMEOUT_MS);
  try {
    await fetch(url, { mode: "no-cors", cache: "no-store", signal: controller.signal });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
};

// Starts with the primary link and switches to the fallback if the primary host doesn't answer
export const useReachableUrl = (primaryUrl?: string, fallbackUrl?: string) => {
  const [unreachableUrl, setUnreachableUrl] = useState<string>();

  useEffect(() => {
    if (!primaryUrl || !fallbackUrl) return;
    let cancelled = false;
    pingUrl(primaryUrl).then((reachable) => {
      if (!cancelled && !reachable) setUnreachableUrl(primaryUrl);
    });
    return () => {
      cancelled = true;
    };
  }, [primaryUrl, fallbackUrl]);

  return unreachableUrl === primaryUrl ? fallbackUrl : primaryUrl;
};
