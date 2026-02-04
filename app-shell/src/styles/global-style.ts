import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap");

  :root {
    color-scheme: light;
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-light: ${({ theme }) => theme.colors.primaryLight};
    --color-primary-dark: ${({ theme }) => theme.colors.primaryDark};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-secondary-light: ${({ theme }) => theme.colors.secondaryLight};
    --color-secondary-dark: ${({ theme }) => theme.colors.secondaryDark};
    --color-bg: ${({ theme }) => theme.colors.bg};
    --color-bg-alt: ${({ theme }) => theme.colors.bgAlt};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-success-bg: ${({ theme }) => theme.colors.successBg};
    --color-warning: ${({ theme }) => theme.colors.warning};
    --color-warning-bg: ${({ theme }) => theme.colors.warningBg};
    --color-danger: ${({ theme }) => theme.colors.danger};
    --color-danger-bg: ${({ theme }) => theme.colors.dangerBg};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  button {
    font: inherit;
  }
`;
