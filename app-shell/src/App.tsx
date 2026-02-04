import { Outlet } from "@tanstack/react-router";
import { PageShell } from "./styles";
import { HeaderNav } from "./components/header";
import Footer from "./components/footer";

export function App() {
  return (
    <PageShell>
      <HeaderNav />
      <Outlet />
      <Footer />
    </PageShell>
  );
}
