import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 이거 활성화하면 드래그앤드롭이 안됨
    <App />
  // </React.StrictMode>
);

reportWebVitals();
