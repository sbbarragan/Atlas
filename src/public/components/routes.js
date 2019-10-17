import React from 'react';
import { Route, Switch } from 'react-router-dom';
import constants from '../constants';
import { AuthLayout, Layout } from '../components/HOC';
import Error404 from '../components/containers/Error404';
import Login from '../components/containers/Login';

const { reactEndpoints } = constants;

const Routes = () => (
  <Switch>
    <Route
      exact
      path={reactEndpoints.login}
      component={({ match, history }) => (
        <Layout>
          <Login history={history} match={match} />
        </Layout>
      )}
    />
    <Route
      exact
      path={reactEndpoints.home}
      component={({ match, history }) => (
        <AuthLayout history={history} match={match}>
          pepe
        </AuthLayout>
      )}
    />
    <Route component={() => <Error404 />} />
  </Switch>
);

export default Routes;
