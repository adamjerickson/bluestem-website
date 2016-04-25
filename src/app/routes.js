'use strict';
console.log('routes.js is running');

function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        // 'header': {
        //   templateUrl: 'app/partials/header.html',
        // },
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      }
    })

    // .state('vc.items', {
    //   url: '/items/:step',
    //   views: {
    //     'content@': {
    //       templateUrl: 'views/main.html',
    //       controller: 'ItemsController'
    //     }
    //   },
    //   data: {
    //     page: "Items"
    //   }
    // })
}

export default (app) => {
  app.config(routes);
}