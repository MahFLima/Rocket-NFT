import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --body-background: #0e0e0e;
  --color-logo: #ff5b50;
  --card-color: #252525;
  --text-color: #fff;
  --subtitle-color: #5a5757;
  --black-text: #000;
  --color-input: #0D0D0D;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body{
    background-image: url('/assets/background.png');
    overflow-x: hidden;
  }
`;
