import React from 'react';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;
