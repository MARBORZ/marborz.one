import type { ReactNode } from "react";
import { IS_DEV } from "@/shared/env";

// Renders its children only when VITE_APP_ENV is dev. In prod they are not rendered at all.
export default function DevOnly({ children }: { children: ReactNode }) {
  if (!IS_DEV) return null;
  return <>{children}</>;
}
