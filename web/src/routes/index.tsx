import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import Landing from '../pages/Landing';
import Orphanege from '../pages/Orphanage';
import CreateOrphanege from '../pages/CreateOrphanage';
import OrphanegesMap from '../pages/OrphanagesMap';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphanegesMap} isPrivate />

      <Route
        path="/orphanages/create"
        exact
        component={CreateOrphanege}
        isPrivate
      />
      <Route path="/orphanages/:id" component={Orphanege} isPrivate />

      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Routes;
