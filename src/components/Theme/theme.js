import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    backggound-color: ${({ theme }) => theme.background};
  }
`;
export const lightTheme = {
  body: '#f1f1f1',
  text: '#000000',
  background: '#e7eaf2',
  headers: '#ffffff',
  ellipseTop: '#ffd8d0',
  ellipseBottom: '#c5baff',
  gray: '#e0e0e0',
  primary: '#4a56e2'
};

export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  background: '#243763',
  headers: '#2e2e2e',
  ellipseTop: '#ffd8d036',
  ellipseBottom: '#c5baff31',
  gray: '#e0e0e096',
  primary: '#4a57e277'
};