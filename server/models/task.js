var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
  item: String,
  status: String,
},{
  timestamp:true
});

mongoose.model("Task", TaskSchema);
