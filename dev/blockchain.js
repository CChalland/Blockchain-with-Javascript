// class Blockchain {
//   constructor() {
//     this.chain = [];
//     this.newTransactions = [];
//   }

//   //...
// }

const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1');

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  
  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];

  // Genesis Block, the parameters can be arbitrary
  this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient,
    transactionId: uuid().split('-').join('')
  };

  return newTransaction;
}

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj) {
  this.pendingTransactions.push(transactionObj);
  return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  // => Repeatedly hash block until it finds correct hash => '0000OIANSDFUI08N9N09ASND9FN0'
  // => uses current block data for the hash, but also previousBlockHash
  // => continuously changes nonce value until it finds the correct hash
  // => returns to us the nonce value that creates the correct hash
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while(hash.substring(0,4) !== '0000') {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    // Showing the hash cycling through until the hash's first characters are '0000'
    //console.log(hash);
  }
  return nonce;
}


module.exports = Blockchain;
