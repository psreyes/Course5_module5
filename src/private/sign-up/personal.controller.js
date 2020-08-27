(function () {
"use strict";

angular.module('private')
.controller('personalController', personalController);

personalController.$inject = [''];
function personalController() {
// var $ctrl = this;
//    $ctrl.user = {name: '',
//               lastname: '',
//               email: '',
//               phone: '',
//               favorite_dish: ''};
// $ctrl.basePath = ApiPath,
// $ctrl.short_name = favorite_dish
//  }

var user = this;

// user.name = ''
// user.lastname = ''
// user.email = ''
// user.phone = ''
// user.favorite_dish = ''



user.submit = function () {
user.completed = true;
console.log("Hola submit")
   };
}
})();
