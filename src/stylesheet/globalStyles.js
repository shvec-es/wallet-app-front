import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Circe', 'Segoe UI', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ul, ol {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
