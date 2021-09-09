const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(() => {
    console.log('Connected to Mongodb successfully');
}).catch((e) => {
    console.log('Error while attempting to connect to mongodb');
    console.log(e);
})



module.exports = {
    mongoose
};