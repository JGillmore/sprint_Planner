var app = angular.module("sprintApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/showAllTasks.html",
        controller: "showTasksController"
    }).when("/create", {
        templateUrl: "partials/createTask.html",
        controller: "createTaskController"
    });

});
