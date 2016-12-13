console.log('May Node be with you');
const express = require('express');
const app = express();
app.listen(3000, function() {
  console.log('listening on 3000')
});

// ES6 code (Arrow function)
app.get('/', (req, res) => {
  res.send('Hello world')
})

/*
app.get('/', function(req, res) {
  res.send('Hello World')
})
// Note: request and response are usually written as req and res respectively.
*/