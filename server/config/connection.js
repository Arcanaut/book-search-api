const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
