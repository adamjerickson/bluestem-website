'use strict';
console.log('routes.js is running');

function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/test',
      views: {
        'header': {
          //templateUrl: 'partials/header.html',
          template: '<p>me is here</p>'
        },
        'content': {
          template: 'Hey, it is me.',
          controller: 'MainController'
        },
        'footer': {
          //templateUrl: 'partials/footer.html'
          template: '<p>me is here</p>'
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