import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Ideas from '../pages/Ideas';
import AddIdea from '../pages/AddIdea';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/ideas/:page?" component={Ideas} />
    <Route path="/create" component={AddIdea} />
    <Route path="/edit/:id" component={AddIdea} />
  </Switch>
);

export default Routes;
