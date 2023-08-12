import ReactDOM from 'react-dom/client';
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp/>
    </BrowserRouter> 
  </React.StrictMode>,
)
