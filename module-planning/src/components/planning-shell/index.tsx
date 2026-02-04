import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global-style";
import { theme } from "../../styles/theme";
import { PlanningProvider } from "../../context/planning-context";
import { PlanningPage } from "../planning-page";
import { Shell } from "./styles";

export function PlanningShell() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PlanningProvider>
        <Shell>
          <PlanningPage />
        </Shell>
      </PlanningProvider>
    </ThemeProvider>
  );
}
