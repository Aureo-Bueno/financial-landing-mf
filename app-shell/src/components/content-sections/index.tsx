import { lazy, Suspense } from "react";
import { Content, Loading, Section } from "./styles";

const Intro = lazy(() => import("intro/App"));
const Planning = lazy(() => import("planning/App"));

export function ContentSections() {
  return (
    <Content>
      <Suspense fallback={<Loading>Carregando módulos...</Loading>}>
        <Section id="intro">
          <Intro />
        </Section>
        <Section id="planning">
          <Planning />
        </Section>
      </Suspense>
    </Content>
  );
}
