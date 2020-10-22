import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Routes />
          <GlobalStyle />
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
