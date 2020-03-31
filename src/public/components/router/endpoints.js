import React from 'react';
import Login from '../containers/Login';
import Settings from '../containers/Settings';
import Dashboard from '../containers/Dashboard';
import { Clusters, Hosts, Zones } from '../containers/Infrastructure';

const endpoints = {
  login: {
    path: '/',
    authenticated: false,
    component: () => <Login />
  },
  dashboard: {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => <Dashboard />
  },
  settings: {
    name: 'Settings',
    path: '/settings',
    component: () => <Settings />
  },
  // infrastructure
  infrastructure: {
    clusters: {
      name: 'Clusters',
      path: '/clusters',
      component: () => <Clusters />
    },
    hosts: {
      name: 'Hosts',
      path: '/hosts',
      component: () => <Hosts />
    },
    zones: {
      name: 'Zones',
      path: '/zones',
      component: () => <Zones />
    }
  }
  // networks
  /* networks: {
    vnets: {
      name: 'Virtual networks',
      path: '/vnets'
    },
    vnets_templates: {
      name: 'Virtual networks',
      path: '/vnets-templates'
    },
    vnets_topology: {
      name: 'Virtual networks',
      path: '/vnets-topology'
    },
    vnets_secgroup: {
      name: 'Security groups',
      path: '/secgroup'
    }
  } */
};

export default endpoints;
