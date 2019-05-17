const express = require('express');
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];

const nodeAddress = uuid().split('-').join('');

const app = express();
const bitcoin = new blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}` });
});

app.get('/mine', function(req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBLockData = {
    transcation: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBLockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBLockData, nonce);

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);
  
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
    note: "New block mine successfully",
    block: newBlock
  });
});


// Register a node and braodcast it the network
app.post('/register-and-broadcast-node', function(req, res) {
  const newNodeUrl = req.body.newNodeUrl;
  //....
});


// Register a node with the network
app.post('/register-node', function(req, res) {

});


// Register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {

});

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});
