'use strict';

function ContactsControllerFn($rootScope, $scope, $state, $stateParams, $timeout, $http, $location, $anchorScroll, FirebaseService) {
  'ngInject';

  // Methods
  $scope.goTo = GoTo;
  $scope.getContacts = GetContacts;
  $scope.addContact = AddContact;
  $scope.updateContact = UpdateContact;
  $scope.newContact = NewContact;
  $scope.init = Init;

  // Properties
  $scope.contacts = {};

  // Methods
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
        $scope.contacts = data;
        for (var key in data) {
          data[key].keyname = key
        }
        console.log(data);
      },
      function(error) {
        console.log("error");
        console.log(error);
      }
    )
  }

  function Init() {
    $scope.getContacts();
  }
  $scope.init();

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
      contactedByBluestem: $scope.contact.contactedByBluestem
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

  function UpdateContact(currentContact) {
    console.log(currentContact);

    var data = {
      name: currentContact.name,
      email: currentContact.email,
      phone: currentContact.phone,
      donor: currentContact.donor,
      enrollInterest: currentContact.enrollInterest,
      newsletter: currentContact.newsletter,
      message: currentContact.message,
      contactedByBluestem: currentContact.contactedByBluestem
    }

    var contactRef = FirebaseService.getContact(currentContact.keyname);

    console.log(contactRef);

    var result = FirebaseService.updateContact(contactRef, data);

    console.log(result);

    $scope.contact = $scope.newContact();
    var myScope = $scope;
    result.then(
      function(data) {
        swal('Contact updated.');

      },
      function(error) {
        console.log('rejected');
        console.log(error);
      }
    )
  }
}

export default (app) => {
  app.controller('ContactsController', ContactsControllerFn);
};
