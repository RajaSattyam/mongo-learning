
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// for latest version of mongodb
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
//     if(err){
//       return  console.log('Unable to connect to MongoDB Server',err);
//     }
//     console.log('Connected to MongoDB Server');
//     const db = client.db('TodoApp');

//     db.collection('Todos').insertOne({

//     }, (err,result) =>{
//         if(err){
//             return console.log('Unable to insert in Todo', err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));
//     });

//     client.close();
// });



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return  console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').insertOne({
        text:'Eat Lunch',
        completed:false
    }, (err,result) =>{
        if(err){
            return console.log('Unable to insert in Todo', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    });

    // db.collection('Users').insertOne({
    //     name:'Ashu',
    //     age:23,
    //     location:'Bangalore'
    // }, (err,result) =>{
    //     if(err){
    //         return console.log('Unable to insert in Todo', err);
    //     }
    //     //console.log(result.ops[0]._id.getTimestamp());
        
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.close();
});