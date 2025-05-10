// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: global CSS styles
import App from './App';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
