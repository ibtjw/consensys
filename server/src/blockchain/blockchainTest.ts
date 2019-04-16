import Blockchain from './Blockchain';
import Transaction from './Transaction';
import Block from './Block';

const ecdsa = require('ecdsa-secp256r1');

let transactions: any = [];

const bobPrivateKey = ecdsa.generateKey();
const bobPublicKey = bobPrivateKey.toCompressedPublicKey();

const storePrivateKey = ecdsa.generateKey();
const storePublicKey = storePrivateKey.toCompressedPublicKey();

const statePrivateKey = ecdsa.generateKey();
const statePublicKey = statePrivateKey.toCompressedPublicKey();

const countyPrivateKey = ecdsa.generateKey();
const countyPublicKey = countyPrivateKey.toCompressedPublicKey();

const cityPrivateKey = ecdsa.generateKey();
const cityPublicKey = cityPrivateKey.toCompressedPublicKey();

const blockchain = new Blockchain();

const run = async () => {

  for (let t = 0; t <= 5; t++) {
    // first transaction
    // 100 -> bob -> store
    let tx1 = new Transaction(bobPublicKey, storePublicKey, 100);
    tx1.sign(tx1, bobPrivateKey);

    // second transaction
    // 1 -> store -> state
    let tx2 = new Transaction(storePublicKey, statePublicKey, 1);
    tx2.sign(tx2, storePrivateKey);

    // third transaction
    // 1 -> store -> county
    let tx3 = new Transaction(storePublicKey, countyPublicKey, 1);
    tx3.sign(tx3, storePrivateKey);

    // fourth transaction
    // 1 -> store -> city
    let tx4 = new Transaction(storePublicKey, cityPublicKey, 1);
    tx4.sign(tx4, storePrivateKey);

    transactions.push(tx1, tx2, tx3, tx4);
    
    const block1 = new Block(transactions, Date.now());
    blockchain.add(block1);

    transactions = [];
  }
  console.log(JSON.stringify(blockchain));
}

run();

export default run;