import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarConfig } from './CarConfig';
import { Routes, Router, Link } from 'react-router-dom';
import { dataService } from './service/importservice';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CarConfig dataService={ dataService() } />
  </React.StrictMode>,
)

//https://carconfigurator.free.beeceptor.com/carconfig
