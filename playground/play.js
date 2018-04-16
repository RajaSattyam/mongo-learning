// function add (a,b){
//     return new Promise((resolve,reject) =>{
//       if(typeof a === 'number' && typeof b === 'number'){
//         resolve(a+b);
//       }else{
//         reject('Value must be a number');
//       }
//     })
//   }
  
 

  // function add (a,b,callback){
  //   return new Promise((resolve,reject) =>{
  //     if(typeof a === 'number' && typeof b === 'number'){
  //       callback(null,a+b);
  //     }else{
  //       callback('pls provide interger',null);
  //     }
  //   })
  // }

  // add('h',5,(err,result) => {
  //     if(err){
  //         console.log(err);
  //     }else{
  //         console.log(result);
  //     }
  // })

  function main(){
    this.x = 10;
    this.y = 20;
  }

  main.prototype.add = function(){
    return this.x+this.y;
  }

  main.prototype.subtract = function(){
    return this.x+this.y;
  }
 var b = new main();
  console.log(b);