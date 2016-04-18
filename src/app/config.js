'use strict';
console.log('config.js is running');
/**
 * @param  {any} $urlRouterProvider
 */
function config($locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';
console.log('config.js is running, and the config function is running');

//   $urlRouterProvider.otherwise('/');

  // Don't allow console debuggers access in production
  if (ENVIRONMENT === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }
}

// Configure global messenger
// function configAlerts(AlertProvider) {
//   AlertProvider.config({
//     extraClasses: 'messenger-fixed messenger-on-top',
//     theme: 'air'
//   });
// }

// Configure local storage
function configStorage(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('bluestemmontessori')
    .setStorageType('localStorage')
    .setNotify(true, true)
    ;
}

export default (app) => {
  app.config(config);
  //app.config(configAlerts);
  app.config(configStorage);
}
