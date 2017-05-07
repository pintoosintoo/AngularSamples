/// referance path="../Script_Angular/angular.js"

var myApp = angular.module("myApp", []).controller("myController", function ($scope) {

    var employees = [
        { Name: "Ben", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 5644449646.2659 },
        { Name: "Sara", DateOfBirth: new Date("May 5, 1970"), Gender: "Female", Salary: 500000 },
        { Name: "Mark", DateOfBirth: new Date("August 15, 1974"), Gender: "Male", Salary: 57000 },
        { Name: "Pam", DateOfBirth: new Date("October 27, 1979"), Gender: "Female", Salary: 530000.59 },
        { Name: "Todd", DateOfBirth: new Date("December 30, 1983"), Gender: "Male", Salary: 60000 }
    ];
    $scope.employees = employees;
    $scope.rowLimit = 1;
});
