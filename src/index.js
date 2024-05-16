import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure the path is correct!
import App from './App';
import reportWebVitals from './reportWebVitals'; // If you've installed react-scripts


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
