'use strict';

import bootstrap from './bootstrap';

// Single style entry point
import './index.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular');
  require('angular-mocks');
}

const modules = [
  'ui.router',
  'LocalStorageModule'
];

// App object. Pass on to each require() function.
const app = angular.module('bmes', modules);

// Configs
require('./app/config').default(app);
require('./app/run').default(app);
require('./app/routes').default(app);

// Controllers
require('./app/controllers/index.controller').default(app);

bootstrap(app);