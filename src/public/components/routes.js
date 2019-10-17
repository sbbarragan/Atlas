import React from 'react';
import { Route, Switch } from 'react-router-dom';
import constants from '../constants';
import { AuthLayout, Layout } from '../components/HOC';
import Error404 from '../components/containers/Error404';
import Login from '../components/containers/Login';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

const { reactEndpoints } = constants;
const { login, home } = reactEndpoints;
const Routes = () => (
  <Switch>
    <Route
      exact
      path={login}
      component={({ match, history }) => (
        <Layout>
          <Login history={history} match={match} />
        </Layout>
      )}
    />
    <Route
      exact
      path={home}
      component={({ match, history }) => (
        <AuthLayout history={history} match={match}>
          <Home>
            <Dashboard />
          </Home>
        </AuthLayout>
      )}
    />
    <Route component={() => <Error404 />} />
  </Switch>
);

export default Routes;
