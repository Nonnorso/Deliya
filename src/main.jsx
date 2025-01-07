import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '../src/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import Router from '../src/router/router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
