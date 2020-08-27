(function () {
"use strict";

angular.module('private')
.component('myInfo', {
  templateUrl: 'src/private/my-info/my-info.html',
  bindings: {
    userInfo: '<',
    signup: '<'
  }
});



})();
