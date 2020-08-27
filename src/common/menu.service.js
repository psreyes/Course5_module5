(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  //var userInfo = {name: "el que sea"};
  var userInfo = {};
  // service.user = {name: '',
  // lastname: '',
  // telephone: '',
  // favorite_dish: ''
  // }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log(response.data)
      return response.data;
    });
  };

  service.getFavoriteDish = function (dish_number) {
    //var config = {};
    if (dish_number) {
      //config.params = {'dish_number': dish_number}
    //}

    return $http.get(ApiPath + '/menu_items/' + dish_number + '.json').then(function (response) {
      console.log("desde MenuService" + dish_number + response.data)
      return response.data;
    }
  )
  .catch(function (errorResponse) {
    console.log(errorResponse);
    service.error = "Menu item not found, please, try again"
    return service.error
  }
)
}
  }

  service.registerUserData = function (name, lastname, email, phone, favorite_dish,
    favorite_short, favorite_description) {
    //userInfo.name = name, lastname: lastname, telephone: telephone, favorite_dish: favorite_dish}
    userInfo.name = name;
    userInfo.lastname = lastname;
    userInfo.phone = phone;
    userInfo.email = email;
    userInfo.favorite_dish = favorite_dish;
    userInfo.favorite_short = favorite_short;
    userInfo.favorite_description = favorite_description;
    console.log(userInfo);
  }

  service.getUserData = function() {
    console.log(userInfo)
    return userInfo
  }

  // service.getFavoriteDish = function (dish_number) {
  //   return $http.get(ApiPath + 'menu_items.json').then(function (response) {
  //     console.log(response)
  //     return response
  //   })
  // }

}



})();
