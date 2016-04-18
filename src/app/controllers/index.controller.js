'use strict';

function ControllerFn() {
  'ngInject';
  
  jQuery('body').text('yo you bastard');
}

export default (app) => {
  app.controller('MainController', ControllerFn);
};
