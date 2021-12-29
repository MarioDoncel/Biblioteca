import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GloblaStyle } from './styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <GloblaStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

