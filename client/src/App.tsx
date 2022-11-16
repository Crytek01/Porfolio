import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '@infrastructure/navigation';
import { StandardLayout } from '@layouts/standard-layout/standard.layout';
import { ThemeProvider } from 'styled-components';

import { theme } from './infrastructure/theme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StandardLayout>
            <Navigation />
          </StandardLayout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
