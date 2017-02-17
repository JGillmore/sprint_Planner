var app = angular.module("SprintApp", ["ngRoute"]);
console.log("Creating App");

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/showAllTasks.html",
        controller: "showTasksController"
    }).when("/create", {
        templateUrl: "partials/createTask.html",
        controller: "createTaskController"
    });

    console.log("Configuring Routes")
});
