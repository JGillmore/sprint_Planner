app.factory("TaskFactory", function ($http) {

   var tasks = {};
   var factory = {};

   factory.create = function(task){
     $http.post('/create', task);
   }
   factory.showAll = function(callback){
     $http.get('/tasks').then(function(tasksRes){
        tasks = tasksRes.data;
        callback(tasks);
     })
   }
   factory.update = function(id, statusChange, callback){
     $http.put('/task/'+id, {status:statusChange}).then(function(data){
       tasks = data.data;
       callback(tasks);
     })
   }

   return factory;

});
