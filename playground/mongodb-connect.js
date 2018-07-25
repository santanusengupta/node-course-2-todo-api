//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
//console.log(obj);
//object destructuring
// var user = {name:'santanu',age:38};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
if(err){
  return console.log('unable to connect to MongoDB server.')
}
console.log('Connected to MongoDB server');
//const db = client.db('TodoApp');
const db = client.db('TodoApp');
db.collection('Todos').insertOne({
  text:'Something to delete',
  completed:false
},(err,result)=>{
  if(err){
    return console.log('Unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

//Insert new doc into Users (name,age,location)
// db.collection('Users').insertOne({
//   name:'santanu',
//   age:38,
//   location:'India'
// },(err,result) =>{
//   if(err){
//     return console.log('Inable to insert User',err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// });

client.close();
});
