import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WorksContextProvider } from './contexts/works/works.service';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WorksContextProvider>
      <App />
    </WorksContextProvider>
  </React.StrictMode>
);
