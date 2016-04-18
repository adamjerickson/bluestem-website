'use strict';
console.log('run.js is loading');

function OnRun($rootScope, $state, $stateParams, localStorageService) {
  'ngInject';
  // Force to /vc/items/0 & clear all cached data on run
//   $state.go('main');
  localStorageService.clearAll();

  // Store state and params for later
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$locationChangeStart', LocationChangeStart);

  // track the state the user wants to go to and from;
  function LocationChangeStart(event, toState, toParams, fromState, fromParams) {
    $rootScope.fromState = fromState;
    $rootScope.fromStateParams = fromParams;
    $rootScope.toState = toState;
    $rootScope.toStateParams = toParams;
  }

}

export default (app) => {
  app.run(OnRun);
}
