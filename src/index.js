import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'PT Sans', sans-serif;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
