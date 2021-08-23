var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'database'

async function main() {
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('san_pham')
  const findResult = await collection.find({}).toArray()
  console.log('Found documents =>', findResult)
  // the following code examples can be pasted here...
  res.render('index', { title: 'My Porfolio',data:findResult});
  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
  
});
router.get('/chi_tiet_san_pham.:idsp', function(req, res, next) {
  var id= req.params.idsp;
  const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'database'

async function main() {
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('san_pham')
  const findResult = await collection.find({}).toArray()
  console.log('Found documents =>', findResult)
  // the following code examples can be pasted here...
  res.render('detail', { title: 'My Porfolio',data:findResult,req_id:id});
  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
  
});

router.get('/detail/*.:idsp', function(req, res, next) {
  var id= req.params.idsp;
  const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'database'

async function main() {
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('san_pham')
  const findResult = await collection.find({}).toArray()
  console.log('Found documents =>', findResult)
  // the following code examples can be pasted here...
  res.render('detail', { title: 'My Porfolio',data:findResult,req_id:id});
  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
  
});


module.exports = router;
