app.controller('showTasksController', function (TaskFactory, $scope){
  TaskFactory.showAll(function(tasks){
    $scope.tasks = tasks;
  })
  $scope.update = function(id, statusChange){
    TaskFactory.update(id, statusChange, function(tasks){
      $scope.tasks = tasks;
    });
  }
});
