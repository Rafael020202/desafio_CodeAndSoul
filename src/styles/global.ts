import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
  }

  body, html, #root {
    height: 100%;
    background-color: #F8F8F8;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
`;