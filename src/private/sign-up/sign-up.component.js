(function () {
"use strict";

angular.module('private')
// .controller('SignUpController', SignUpController)
.component('signUp', {
  templateUrl: 'src/private/sign-up/sign-up.html',
  bindings: {
    user: '<',
    short_name: '<'
  }
  //controller: signUpController
});

console.log("Hola")

})();
