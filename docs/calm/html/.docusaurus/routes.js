import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '044'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'afa'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '7dc'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '68f'),
            routes: [
              {
                path: '/nodes/ghcp-user',
                component: ComponentCreator('/nodes/ghcp-user', '6c0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/the-application',
                component: ComponentCreator('/nodes/the-application', 'c7e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/the-database',
                component: ComponentCreator('/nodes/the-database', 'be4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/app-to-database',
                component: ComponentCreator('/relationships/app-to-database', '002'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/user-to-app',
                component: ComponentCreator('/relationships/user-to-app', '114'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'bea'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
