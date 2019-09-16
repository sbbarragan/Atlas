import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLayout, Layout } from '../components/HOC';
import Error404 from '../components/containers/Error404';

// aca se puede colocar las llamadas al acceso a las rutas valida para los usuarios segun su perfil (yamls del antiguo sunstone)
const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Layout>login</Layout>} />

    <Route
      exact
      path="/management"
      component={({ match }) => {
        const { url } = match;
        return <AuthLayout>test</AuthLayout>;
      }}
    />

    <Route component={() => <Error404 />} />
  </Switch>
);

export default Routes;
