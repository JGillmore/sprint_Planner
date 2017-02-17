var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Sprint_Planner');

require('../models/task');
