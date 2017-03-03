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
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      }
    })
    .state("about", {
      url: '/about',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('about');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("enroll", {
      url: '/enroll',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('enroll');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("staff", {
      url: '/staff',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('staff');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("laura", {
      url: '/laura',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('laura');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("heather", {
      url: '/heather',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('heather');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("contact", {
      url: '/contact',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('contact');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 1000);
      }
    })
    .state("donate", {
      url: '/donate',
      views: {
        'content': {
          templateUrl: 'app/views/main.html',
          controller: 'MainController as ctrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.html'
        }
      },
      onEnter: function($location, $anchorScroll, $timeout){
          $timeout(function() {
            $location.hash('donate');
            $anchorScroll.yOffset = 38;
            $anchorScroll();
          }, 10000);
      }
    })
    .state('contacts', {
      url: '/contacts',
      views: {
        'content': {
          templateUrl: 'app/views/contacts.html',
          controller: 'ContactsController as ctrl'
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