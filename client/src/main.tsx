import React from 'react';
import ReactDOM from 'react-dom/client';

import { WorksContextProvider } from './contexts/works/works.service';
import { GlobalStyle } from './styles/global-styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WorksContextProvider>
      <App />
      <GlobalStyle />
    </WorksContextProvider>
  </React.StrictMode>
);
