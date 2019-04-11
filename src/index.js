import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style.css';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement
);
