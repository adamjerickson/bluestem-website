'use strict';

export default (app) => {
  angular.element(document).ready(function () {
    angular.bootstrap(document.body.parentNode, ['bmes'], {
      strictDi: ENVIRONMENT === 'production' ? true : false
    });
  });
}
