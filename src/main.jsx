import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './style.css';
import { AppThems } from './theme/AppThems';
import { FiltersProvider } from './context/FiltersProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FiltersProvider>
        <AppThems>
          <AppRouter />
        </AppThems>
      </FiltersProvider>
    </BrowserRouter>
  </React.StrictMode>


)
