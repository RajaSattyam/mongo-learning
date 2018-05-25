const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;
const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
const util = require('util');
client.get = util.promisify(client.get);


mongoose.Query.prototype.cache = function (){
    this.useCache = true;
    
    // and to make chainable
    return this;
}


mongoose.Query.prototype.exec = async function () {

    if(!this.useCache){
        return exec.apply(this,arguments);
    }


    console.log("I am about to run a query");

    // console.log(this.getQuery());
    // console.log(this.mongooseCollection.name);

    //key generation

    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        Collection:this.mongooseCollection.name
    }));

    // See if we have a value for 'key' in redis
    const cacheValue = await client.get(key);

    //If we do ,return that

    if(cacheValue) {
        console.log('cached',cacheValue);
        // make JSON to back mongoose doc
       // const doc  = new this.model(JSON.parse(cacheValue));// it will handle only single obj not array of objects
       const doc = JSON.parse(cacheValue);
        
     return Array.isArray 
        ? doc.map(d => new this.model(d))
        : new this.model(doc); 


        //return doc;
    }

    // Otherwise , issue the query and store the result in redis

    // run original copy of exec function
    const result = await exec.apply(this,arguments); // mongoose documents not plain JS Object

    client.set(key, JSON.stringify(result));

    return result;





}; 