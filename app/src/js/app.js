import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import UnitTypes from './pages/UnitTypes';
import Units from './pages/Units';
import Layout from './pages/Layout';
import ChangeLog from './pages/ChangeLog';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Units}></IndexRoute>
      <Route path='unittypes' component={UnitTypes}></Route>
      <Route path='changelog' component={ChangeLog}></Route>
    </Route>
  </Router>,
app);
