/// <reference path="angular.js" />

var myapp = angular.module("myapp", []).controller("ctrl", function ($scope) {

    country = {
        CountryName: 'India',
        State: 'UP',
        ImageLiked: '/Images/Angular.png'
    }
    $scope.country = country;
})