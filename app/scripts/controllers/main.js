'use strict';

angular.module('fivefifteenApp')
  .controller('MainCtrl', function ($scope, $routeParams, Data, Steps) {

    // Simple Data service to persist form values.
    $scope.data = Data;

    $scope.path = $routeParams.stepName;

    $scope.steps = Steps.data;

    Steps.promise.$on('loaded', function(values) {
      // If we get values, store it both in the scope and Steps.
      if (typeof values !== "undefined") {
        angular.extend(Steps.data, values);
      }
    });
  })

  // scope data is not persistent across views so we use a simple service.
  .factory('Data', function () {
    // This variable holds all of the text used on the site.
    return {};
  })

  .factory('Steps', function($firebase) {
    var url = new Firebase("https://fivefifteen.firebaseio.com/steps"),
        ref = $firebase(url);

    return {
      "promise": ref,
      "data": {}
    };
  });
