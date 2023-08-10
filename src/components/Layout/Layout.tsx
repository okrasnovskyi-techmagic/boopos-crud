import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app bg-primary-slate flex min-h-screen flex-col">
      <div className="container max-w-screen-lg mx-auto pt-10">{children}</div>
    </div>
  );
}

export default Layout;
