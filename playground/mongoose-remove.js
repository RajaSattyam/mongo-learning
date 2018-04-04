const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// remove everything in a collection
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id:'5ac513cffb703f8d1248cb2b'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5ac513cffb703f8d1248cb2b').then((todo) => {
    console.log(todo);
});
