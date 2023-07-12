import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarConfig } from './CarConfig';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <CarConfig />
    </BrowserRouter>
  </React.StrictMode>,
)

//https://carconfigurator.free.beeceptor.com/carconfig
