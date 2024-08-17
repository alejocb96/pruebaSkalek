import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './style.css';
import { AppThems } from './theme/AppThems';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppThems>
        <AppRouter />
      </AppThems>
    </BrowserRouter>
  </React.StrictMode>


)
