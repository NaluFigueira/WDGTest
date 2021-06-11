import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/Login';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/globalStyles';
import colors from './theme/colorPalette';
import {ThemeProvider} from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={colors}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
