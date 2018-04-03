const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to MongoDB');

    db.collection('Todos').insert({
        text:'Had Dinner',
        completed:true
    }).then((docs) =>{
        console.log(JSON.stringify(docs.ops,undefined,2));
    },(err) =>{
        console.log('Unable to insert', err);
    });
    db.close();
});