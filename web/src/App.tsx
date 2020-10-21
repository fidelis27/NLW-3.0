import React from 'react';
import GlobalStyle from './styles/global';

import Routes from './routes';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;
