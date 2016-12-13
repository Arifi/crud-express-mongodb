console.log('May Node be with you');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function() {
  console.log('listening on 3000');
  console.log('DIRNAME : ' + __dirname);
});

// ES6 code (Arrow function)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})
/*
app.get('/', function(req, res) {
  res.send('Hello World')
})
// Note: request and response are usually written as req and res respectively.
*/

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

MongoClient.connect('mongodb://mourad:3?9T:(w5V9g{p\uJ@ds133438.mlab.com:33438/crud-express-mongodb', (err, database) => {
  // ... start the server
})
