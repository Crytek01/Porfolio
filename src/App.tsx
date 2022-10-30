import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navigation } from './infrastructure/navigation';
import { StandartLayout } from './layouts/grid-layout/standart.layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StandartLayout>
          <Navigation />
        </StandartLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
