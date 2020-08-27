(function () {
"use strict";

angular.module('private')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  console.log($ctrl.userInfo)
  if (Object.keys($ctrl.userInfo) == 0) {
  $ctrl.signup = false;
}
else {
  $ctrl.signup = true;
}

console.log($ctrl.signup)
}


})();
