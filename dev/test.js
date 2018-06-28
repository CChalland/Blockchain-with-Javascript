const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANSD9F0N9009N');

bitcoin.createNewTransaction(100, '89ANSD89F9W0N90A', 'NUUN0AN09N09A98B');

bitcoin.createNewBlock(111, 'OIANSDF0AN09', 'NJNASDNF09ASDF');

bitcoin.createNewTransaction(50, '89ANSD89F9W0N90A', 'NUUN0AN09N09A98B');
bitcoin.createNewTransaction(300, '89ANSD89F9W0N90A', 'NUUN0AN09N09A98B');
bitcoin.createNewTransaction(2000, '89ANSD89F9W0N90A', 'NUUN0AN09N09A98B');

bitcoin.createNewBlock(9878934, 'AIOS9F0AN', '09ASF09N90ASDF');



console.log(bitcoin);
