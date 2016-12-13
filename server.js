console.log('May Node be with you');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())
//
app.set('view engine', 'ejs')

var db
var port = 3000
const mlablink = 'mongodb://mou:armed@ds133438.mlab.com:33438/crud-express-mongodb'


MongoClient.connect(mlablink, (err, database) => {
  
  if (err) return console.log(err);
  db = database;
  app.listen(port, () => {
    console.log('listening on ' + port);
	console.log('DIRNAME : ' + __dirname);
  })
  
})

// ES6 code (Arrow function)
app.get('/', (req, res) => {
  //var cursor = db.collection('quotes').find()
  //console.log(cursor)
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  })
})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'mou'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

