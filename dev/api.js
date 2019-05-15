const express = require('express');
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');

const app = express();
const bitcoin = new blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

app.get('/mine', function(req, res) {

});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
})
