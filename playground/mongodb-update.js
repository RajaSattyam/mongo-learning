const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to MongoDB');

//    db.collection('Todos').findOneAndUpdate({
//        _id:new ObjectID('5ac3c2a1cf63f71bd2c1b470')
//    },{
//        $set:{
//            completed:false
//        }
//    },{
//        returnOriginal:false
//    }).then((res) =>{
//        console.log(res);
//    });

db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5ac3c2a1cf63f71bd2c1b470')
},{
    $inc:{
        age:1
    }
},{
    returnOriginal:false
}).then((res) =>{
    console.log(res);
});

   // db.close();
});