var taskController = require('../controllers/tasks');
module.export = function(app){
  app.get('/tasks', TaskController.showAll)
  app.post('/create', TaskController.create)
  app.put('/task/:id', TaskController.update)
}
