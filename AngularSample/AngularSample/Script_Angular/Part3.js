/// <reference path="angular.js" />
var myapp = angular.module("myapp", []).controller("ctrl", function ($scope) {
    var Employee = {
        firstName: "Saurabh",
        lastName: "Kumar",
        gender:"Male"

    };
    $scope.Employee = Employee;
    $scope.message = "this is our 3rd application";
});