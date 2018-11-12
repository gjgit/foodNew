import React from 'react';
import Loadable from 'react-loadable'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const vendor = Loadable({
  loader: () => import('./views/vendor'),
  loading: Loading,
});




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/vendor', name: 'vendor', component: vendor },
];

export default routes;
