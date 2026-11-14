import type { ReactNode } from "react";
import Header from "./Header";
import DevBadge from "./dev/DevBadge";
import DevOnly from "./dev/DevOnly";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <DevOnly>
        <DevBadge />
      </DevOnly>
    </>
  );
}
