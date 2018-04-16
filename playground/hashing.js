//const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var token = jwt.sign({id:23,email:'ashutosh@mishra'},'mysecret');
console.log('token',token);
var verified = jwt.verify('token','mysecret');
console.log('verified',verified);
var decode = jwt.decode(token,'mysecret');
console.log('decode', decode);


// var message = 'I am user 3';

// var hash = SHA256(message).toString();

// console.log(hash);

// var data = {
//     id:4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed. Do not trust');
// }