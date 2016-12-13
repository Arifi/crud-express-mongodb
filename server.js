console.log('May Node be with you');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));

var db;

const mlablink = 'mongodb://mou:armed@ds133438.mlab.com:33438/crud-express-mongodb'

MongoClient.connect(mlablink, (err, database) => {
  
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
	console.log('DIRNAME : ' + __dirname);
  })
  
})

// ES6 code (Arrow function)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  })
})


