(function() {
'use strict';

angular.module('private')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('personal', {
      //abstract: true,
      url: '/personal',
      templateUrl: 'src/private/sign-up/sign-up.html',
      controller: 'signUpController',
      controllerAs: 'user'
      // resolve: {
      //   favorite_item: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
      //     return MenuService.getFavoriteDish(user.favorite_short)
      //   }]
      // }
    })
    .state('my-info', {
      url: '/my-info',
      templateUrl: 'src/private/my-info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'info',
      resolve: {
        userInfo: ['MenuService', function (MenuService) {
          return MenuService.getUserData();
        }]
      }
    })
    // .state('signup', {
    //   url: '/sign-up.html',
    //   templateUrl: 'src/private/sign-up.html',
    //   controller: 'signUpController'
    // })
    // .state('public.menu', {
    //   url: '/menu',
    //   templateUrl: 'src/public/menu/menu.html',
    //   controller: 'MenuController',
    //   controllerAs: 'menuCtrl',
    //   resolve: {
    //     menuCategories: ['MenuService', function (MenuService) {
    //       return MenuService.getCategories();
    //     }]
    //   }
    // })
    // .state('public.menuitems', {
    //   url: '/menu/{category}',
    //   templateUrl: 'src/public/menu-items/menu-items.html',
    //   controller: 'MenuItemsController',
    //   controllerAs: 'menuItemsCtrl',
    //   resolve: {
    //     menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
    //       return MenuService.getMenuItems($stateParams.category);
    //     }]
    //   }
    // })
  //    .state('public.signup', {
  //      url: '/signup',
  //      templateUrl: 'src/public/sign-up/sign-up.html',
  //      controller: 'signUpController',
  //      //controllerAs: 'signUpCtrl',
  //      resolve: {
  //        favorite_dish: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
  //        return MenuService.getFavoriteDish(F);
  //      }]
  //      }
  //   }
  // );
}
})();
