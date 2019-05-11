const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// Testing the blockchain function createNewBlock
//bitcoin.createNewBlock(892348, 'AADSADASDDA95350', 'AJKFDAJFDAJ04R43WFSD');
// Testing the blockchain function createNewTransaction
//bitcoin.createNewTransaction(100, 'ALEXFA54SFJ76LA', 'JENAFJA7FD345NSD');
// When there's pending transactions, you have to create a new block to push those transactions to blockchain
//bitcoin.createNewBlock(1243242, 'DAJFDAD354FFD', 'DFJDAFDA345WFSA');
//console.log(bitcoin);

// Testing mulitiple transactions in one block
//bitcoin.createNewTransaction(50, 'DAJFDAD354FFD', 'DFJDAFDA345WFSA');
//bitcoin.createNewTransaction(300, 'DAJFDAD354FFD', 'DFJDAFDA345WFSA');
//bitcoin.createNewTransaction(2000, 'DAJFDAD354FFD', 'DFJDAFDA345WFSA');
//bitcoin.createNewBlock(4342442, 'DFSAFJ94385RFD', 'G5T5GWRGL5GW34TGD');
// To see the blockchain's array
//console.log(bitcoin.chain[3]);


// Creating some values to use with when testing the hashBlock function
const previousBlockHash = 'AFHDF4FHRF5GW6G5J63JKGJTGERTG';
const currentBlockHash = [
    {
        amount: 10,
        sender: 'FDADADN43FEF42FGGDS',
        recipient: 'FH42345456GGWWEGTW'
    },
    {
        amount: 30,
        sender: 'DFARFJK3T5GWRER45',
        recipient: 'SRVJWKLRWCRJT45CT4GJW'
    },
    {
        amount: 200,
        sender: 'FGGDSSGR45TY45G',
        recipient: 'GWWEGTW54G54G4CGG'
    }
];
// Testing the nonce function for proofOfWork
let nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockHash)
// Showing the nonce from the proofOfWork function
//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockHash));

// Showing the hashBlock output
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockHash, nonce));

// Showing the hashBlock function
//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockHash, nonce));


