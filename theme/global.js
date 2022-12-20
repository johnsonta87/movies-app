import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    darkGrey: '#888888',
    lightGrey_1: '#dddddd',
    lightGrey_2: '#eeeeee',
  },
};

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
  }
  #root{
    background-color: ${(props) => props.theme.colors.black};
    font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif !important;
    color: ${(props) => props.theme.colors.white};
    margin: 0 auto;
    padding: 5vw;
  }
  button {
    color: ${(props) => props.theme.colors.white};
  }
`;
