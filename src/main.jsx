import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // যদি Tailwind বা custom CSS থাকে

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

