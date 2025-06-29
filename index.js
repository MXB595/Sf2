import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Nasconde loading screen quando React è pronto
const hideLoading = () => {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loading.style.display = 'none', 500);
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Nasconde loading dopo render
setTimeout(hideLoading, 1000);
