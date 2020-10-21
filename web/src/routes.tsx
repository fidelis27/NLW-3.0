import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Orphanege from './pages/Orphanage';
import CreateOrphanege from './pages/CreateOrphanage';
import OrphanegesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanegesMap} />

        <Route path="/orphanages/create" exact component={CreateOrphanege} />
        <Route path="/orphanages/:id" exact component={Orphanege} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
