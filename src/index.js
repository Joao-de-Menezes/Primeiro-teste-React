import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));//essse componente está sendo renderizada como o nosso root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);