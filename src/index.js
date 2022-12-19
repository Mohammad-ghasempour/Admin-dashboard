import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import darkModeContextProvider from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <darkModeContextProvider>
    <App />
    </darkModeContextProvider>
  </React.StrictMode>
);


