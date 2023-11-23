import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import { GlobalStyle } from './GlobalStyle.js';
import { TaskInterface } from '../src/components/TaskInterface/index'
//import { Home } from '../src/Pages/Home/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <TaskInterface />
  </React.StrictMode>
);


