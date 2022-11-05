import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Navigation } from './infrastructure/navigation';
import { theme } from './infrastructure/theme';
import { StandartLayout } from './layouts/grid-layout/standart.layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StandartLayout>
            <Navigation />
          </StandartLayout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
