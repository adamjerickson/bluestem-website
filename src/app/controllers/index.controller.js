'use strict';

function ControllerFn($scope, $state, $stateParams, $timeout, $http, $location, $anchorScroll) {
  'ngInject';
  
  // Methods
  $scope.donate = Donate;
  $scope.donateCustom = DonateCustom;
  $scope.goTo = GoTo;
 
  
  // Properties
  $scope.amts = {};
  $scope.amts.isValid = true;
  $scope.donation = {};
  $scope.handler = StripeCheckout.configure({
      key: 'pk_live_18ZNSo9jS5BDWy2ZfMkm46zp',
      image: '../../media/bluestem.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        $http({
          method: 'POST',
          url: 'https://bluestemmontessori.com/stripepay.php',
          data: {
            amount: $scope.donation.amt,
            token: token.id,
            description: $scope.donation.description
          }
        }).then(
          // success
          function(result) {
            swal('Thank you!', 'Your donation was accepted.  You\'ve made our day.', 'success');
          },
          // error
          function(error) {
            swal('Oh shoot!', 'Something went wrong.  It\'s our fault.  Please try again.  If it keeps happening, email us and we\'ll take care of you.', 'error');
          }
        );
      }
    });
  
  function Donate(amt, thing, e) {
    var description;
    
    
    if (thing == '') {
      description = 'Donation';
    } else {
      description = 'Donation: ' + thing;
    }
    
    $scope.donation.amt = amt;
    $scope.donation.description = 'Bluestem Montessori ' + description;
    
    $scope.handler.open({
        name: 'Bluestem Montessori',
        description: description,
        amount: amt
      });
      e.preventDefault();

    // Close Checkout on page navigation:
    $(window).on('popstate', function() {
      handler.close();
    });
  
  
  }
  
  function DonateCustom(e) {    
    if (typeof($scope.amts.customAmt) === 'undefined' || $scope.amts.customAmt === '' || isNaN(Number($scope.amts.customAmt))) {
        $scope.amts.isValid = false;
        console.log('not valid');
    } else {
      
      $scope.amts.isValid = true;
        $scope.donate($scope.amts.customAmt * 100, '', e);
      
    }
  }
  
  function GoTo(anchor) {
    // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(anchor);
      
      // call $anchorScroll()
      $anchorScroll();
  }
}

export default (app) => {
  app.controller('MainController', ControllerFn);
};
