import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Open-Sans, Helvetica;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${MontserratRegular}),format('ttf');
  }
`;
 
export default GlobalStyle;