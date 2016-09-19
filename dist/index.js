'use strict';

import bootstrap from './bootstrap';

// Single style entry point
import './index.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular');
}

const modules = [
  'ui.router',
  //'LocalStorageModule'
];

// App object. Pass on to each require() function.
const app = angular.module('bmes', modules);

// Configs
require('./app/config').default(app);
require('./app/run').default(app);
require('./app/routes').default(app);

// Controllers
require('./app/controllers/index.controller').default(app);
require('./app/controllers/contacts.controller').default(app);

// Services
require('./app/services/firebase.service').default(app);

// Templates
import './templates';

bootstrap(app);