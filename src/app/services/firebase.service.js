'use strict';

function ServiceFn($timeout, $http, $q) {
  'ngInject';

  // Our main object.  Everything attaches here
  var svc = {};

  //Methods
  svc.addContact = AddContact;
  svc.getContact = GetContact;
  svc.getContacts = GetContacts;
  svc.updateContact = UpdateContact;


  // Internal Code
  var fireRef = new Firebase("https://bluestemmontessori.firebaseio.com/");
  fireRef.authWithPassword({
        email    : "contactadd@bluestemmontessori.com",
        password : "BluestemMontessori"
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    }
  );
  var contactsRef = fireRef.child("contacts");

  function AddContact(contactJson) {
      var newContact = contactsRef.push().set({
            name: contactJson.name,
            email: contactJson.email,
            donor: contactJson.donor,
            newsletter: contactJson.newsletter,
            phone: contactJson.phone,
            enrollInterest: contactJson.enrollInterest,
            message: contactJson.message,
            dateOfContact: contactJson.dateOfContact,
            contactedByBluestem: contactJson.contactedByBluestem
        });

      return newContact;
  }

   function GetContact(key) {
       var contactRef = new Firebase("https://bluestemmontessori.firebaseio.com/contacts/" + key);
//fireRef.orderByChild("email").equalTo(email).limitToFirst(1);
       return contactRef;
   }

  function GetContacts() {
      var deferred = new $q.defer();

      // get the data from firebase, and set up the callbacks which resolve or reject the promise
      fireRef.child("contacts").once("value").then(
        //success
        function(snapshot) {
            deferred.resolve(snapshot.val())
        },
        // error
        function(error) {
            deferred.reject(error);
        }
      );

      return deferred.promise;
  }

  function UpdateContact(queryRef, updateData) {
    console.log(queryRef);
    return queryRef.update(updateData);
  }

  return svc;

}

export default (app) => {
  app.factory('FirebaseService', ServiceFn);
};