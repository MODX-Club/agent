import { createGlobalStyle } from 'styled-components'

export const LovableGlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.lovableFont.family};
    font-size: ${({ theme }) => theme.lovableFont.sizeMd};
    line-height: 1.55;
    color: ${({ theme }) => theme.lovableColor.text};
    background: ${({ theme }) => theme.lovableColor.paper};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
    letter-spacing: -0.01em;
  }
  p { margin: 0; }
`
