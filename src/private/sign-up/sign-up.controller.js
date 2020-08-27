(function () {
"use strict";

angular.module('private')
.controller('signUpController', signUpController);

signUpController.$inject = ['MenuService'];
function signUpController(MenuService) {
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

user.submit = function () {

MenuService.getFavoriteDish(user.favorite_short).
then(function(response) {
user.favorite_dish = response.name
user.favorite_description = response.description
user.completed = true;
console.log("Hola submit")
console.log(user.favorite_short)
console.log(user.favorite_dish)
}).
then(function(response) {
console.log(user)
MenuService.registerUserData(user.name, user.lastname, user.email, user.phone, user.favorite_dish,
user.favorite_short, user.favorite_description)
}
)
// user.completed = true;
// console.log("Hola submit")
// console.log(user.favorite_short)
//user.favorite_item = favorite_item

// user.favorite_dish = MenuService.getFavoriteDish(user.favorite_short).then(function(response) {
//   return response
// })


   };
}
})();
