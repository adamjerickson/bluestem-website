'use strict';

/**
 * @param  {any} $urlRouterProvider
 */
function config($locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  // Don't allow console debuggers access in production
  if (ENVIRONMENT === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }
}

export default (app) => {
  app.config(config);

}
