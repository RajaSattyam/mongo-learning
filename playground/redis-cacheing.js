const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';

const client = redis.createClient(redisUrl);
//console.log(client);
client.set('hi','there');

client.get('hi', console.log);

client.hset('spanish','red','rojo');

client.hget('spanish','red', (err,val)=>console.log(val));

// client.set('colors',{red:'rojo'}); //error cannot store plain JS Object

// client.get('colors',console.log); // null '[object Object]'

// stringify object that want to store
client.set('colors', JSON.stringify({red:'rojo'}));

client.get('colors',(err, val) => console.log(JSON.parse(val)));



Person
  .find({ occupation: /host/ })
  .where('name.last').equals('Ghost')
  .where('age').gt(17).lt(66)
  .where('likes').in(['vaporizing', 'talking'])
  .limit(10)
  .sort('-occupation')
  .select('name occupation');

//Check to see if this query has already been fetched in Redis 

  query.exec();

// 3 ways to execute a query

query.exex((err,result) => {});
//Same as..
query.then((result) => {});
// Same as..
const result = await query;

//Override exec function..

query.exec = function(){
  // to check to see if this query has already been executed
  // and if it has return the result right away


// otherwise issue the query *as normal*


//then save that value in reddis


}
