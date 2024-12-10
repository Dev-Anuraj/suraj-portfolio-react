import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ParticlesComponent from './components/ParticlesBackground/ParticlesBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ParticlesComponent />
    <App />
  </React.StrictMode>
);
