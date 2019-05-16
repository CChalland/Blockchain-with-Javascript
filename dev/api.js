const express = require('express');
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');
const uuid = require('uuid.v1');

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
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBLockData, nonce);
  const blockHash = bitcoin.hashBlock();

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);
  
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, hash);
  res.json({
    note: "New block mine successfully",
    block: newBlock
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
