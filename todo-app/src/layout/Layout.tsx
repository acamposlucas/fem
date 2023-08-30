import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-zinc-300 dark:bg-zinc-900 font-sans">{children}</div>;
}

export default Layout;
