var mongoose = require('mongoose');
var Task = mongoose.model('Task')

module.exports = {
    showAll: function (request, response) {
        console.log("Tasks ShowAll");
        Task.find({}, function(err, tasks){
          if (err){
            response.json(err);
          }else{
            response.json(tasks);
          }
        })
    },
    create: function (request, response) {
      var newTask = new Task(request.body);
      newTask.status = "todo";
      newTask.save(function(err){
        if (err){
          console.log("failed to create new task", newTask);
        }else{
          console.log("Task Created", newTask);
        }
      })
    },
    update: function (req, res) {
      Task.findOne({_id: req.params.id}, function(err, task){
        console.log(task);
        task.status = req.body.status;
        task.save(function(err, updated){
          Task.find({}, function(err, tasks){
            res.json(tasks);
          })
        });
      })
    }
};
