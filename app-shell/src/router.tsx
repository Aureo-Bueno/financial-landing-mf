import { Suspense, lazy } from "react";
import {
  Link,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { App } from "./App";
import { ContentSections } from "./components/content-sections";
import { Content, Loading, Section, BackButton } from "./styles";

const Intro = lazy(() => import("intro/App"));
const Planning = lazy(() => import("planning/App"));

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: () => (
    <Content>
      <Section>
        <h2>Página não encontrada</h2>
        <p>O endereço que você tentou acessar não existe.</p>
        <Link to="/">
          <BackButton type="button">Voltar para a home</BackButton>
        </Link>
      </Section>
    </Content>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ContentSections,
});

const introRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "intro",
  component: () => (
    <Content>
      <Suspense fallback={<Loading>Carregando módulo...</Loading>}>
        <Section>
          <Intro />
        </Section>
      </Suspense>
    </Content>
  ),
});

const planningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "planning",
  component: () => (
    <Content>
      <Suspense fallback={<Loading>Carregando módulo...</Loading>}>
        <Section>
          <Planning />
        </Section>
      </Suspense>
    </Content>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  introRoute,
  planningRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
