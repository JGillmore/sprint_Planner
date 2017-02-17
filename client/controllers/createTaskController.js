app.controller('createTaskController', function (TaskFactory, $scope){
  $scope.create = function(){
    console.log('from create controller', $scope.task);
    TaskFactory.create($scope.task);
    $scope.task = {};
  };
});
