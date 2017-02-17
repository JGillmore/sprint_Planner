var taskController = require('../controllers/tasks');
module.exports = function(app){
  app.get('/tasks', function(req,res){
    taskController.showAll(req,res);
  });
  app.post('/create', function(req,res){
    taskController.create(req,res);
  });
  app.put('/task/:id', function(req,res){
    taskController.update(req,res);
  });
}
