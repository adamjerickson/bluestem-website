'use strict';

function ControllerFn($rootScope, $scope, $state, $stateParams, $timeout, $http, $location, $anchorScroll, FirebaseService) {
  'ngInject';

  // Methods
  $scope.donate = Donate;
  $scope.donateCustom = DonateCustom;
  $scope.goTo = GoTo;
  $scope.getContacts = GetContacts;
  $scope.addContact = AddContact;
  $scope.newContact = NewContact;
  $scope.toggle = Toggle;

  // Properties
  $scope.contact = $scope.newContact();
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

  // Internal methods
  function Toggle(selector, displayStyle, e) {
    var element = document.querySelector(selector);
    if (element.style.display === 'none') {
      element.style.display = displayStyle;
      e.target.innerHTML = 'less';
    } else {
      element.style.display = 'none';
      e.target.innerHTML = 'more';
    }
  }
  
  
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

  function GetContacts() {
    FirebaseService.getContacts().then(
      function(data) {
        console.log(data);
      }
    )
  }

  function NewContact() {
    return {
      name: '',
      email: '',
      phone: '',
      newsletter: 0,
      enrollInterest: 0,
      donor: 0,
      message: '',
      dateOfContact: 0
    };
  }
  function AddContact() {
    var data = {
      name: $scope.contact.name,
      email: $scope.contact.email,
      phone: $scope.contact.phone,
      donor: $scope.contact.donor,
      enrollInterest: $scope.contact.enrollInterest,
      newsletter: $scope.contact.newsletter,
      message: $scope.contact.message,
      dateOfContact: new Date().toString(),
      contactedByBluestem: false
    }

    var result = FirebaseService.addContact(data);
    $scope.contact = $scope.newContact();
    this.$parent.ctrl.contactFrm.$setPristine();
    var myScope = $scope;
    result.then(
      function(data) {
        swal('Thanks!', 'We\'re so glad you took the time to contact us.  We\'ll be in touch soon.');

      },
      function(error) {
        console.log('rejected');
        console.log(error);
      }
    )
  }
}

export default (app) => {
  app.controller('MainController', ControllerFn);
};
