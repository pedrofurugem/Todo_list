import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle.js';
//import { TaskInterface } from '../src/Pages/TaskInterface/index.js'
//import { Home } from '../src/Pages/Home/index.js'
import { MyRoutes } from '../src/routes/routes.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
    <GlobalStyle />
  </React.StrictMode>
);


