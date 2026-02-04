import { Outlet } from "@tanstack/react-router";
import { PageShell } from "./styles";
import { HeaderNav } from "./components/header";

export function App() {
  return (
    <PageShell>
      <HeaderNav />
      <Outlet />
    </PageShell>
  );
}
