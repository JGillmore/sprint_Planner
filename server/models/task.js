var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
  item: String,
  status: String,
},{
  timestamps:true
});

mongoose.model("Task", TaskSchema);
