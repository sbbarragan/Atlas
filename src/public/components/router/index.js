import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLayout } from '../HOC';
import Error404 from '../containers/Error404';
import InternalLayout from '../HOC/InternalLayout';
import endpoints from './endpoints';

function Routes() {
  const routeElement = ({
    path = '/',
    name = '',
    authenticated = true,
    component
  }) => (
    <Route
      key={`key-${name.replace(' ', '-')}`}
      exact
      path={path}
      component={({ match, history }) =>
        authenticated ? (
          <AuthLayout history={history} match={match}>
            <InternalLayout title={name}>
              {React.createElement(component)}
            </InternalLayout>
          </AuthLayout>
        ) : (
          React.createElement(component, { history, match })
        )
      }
    />
  );

  return (
    <Switch>
      {Object.values(endpoints)?.map(routes =>
        routes.component
          ? routeElement(routes)
          : Object.entries(routes)?.map(route => routeElement(route))
      )}
      <Route component={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
export { endpoints };
