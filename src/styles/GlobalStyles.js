import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #100e1d;
    --color-blue: #1e213a;
    --color-blue-light: #3c47e9;
    --color-gray: #6e707a;
    --color-gray-dark: #616475;
    --color-text-primary: #e7e7eb;
    --color-text-secondary: #88869d;
    --color-text-gray: #a09fb1;

    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-background);
  }

  *,
  button,
  input {
    border: 0;
    background: none;
    font-family: 'Raleway', sans-serif;
    color: var(--color-text-primary);
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

`;
