var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection
        .once('open',() => console.log('Connected to mongo',process.env.MONGODB_URI))
        .on('error', (error) => console.warn('Warning',error))  ;

module.exports = {mongoose};