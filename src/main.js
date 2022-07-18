const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, prevHash =''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;

    }
    calculateHash(){
        return SHA256(
            this.index + this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while (this.hash.substring(0, difficulty) !== Array(difficulty - 1).join("0")){
           this.nonce++;
            this.hash = this.calculateHash();
          }
    }
}

class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
       this.difficulty = 5;
      }

      createGenesisBlock() {
        return new Block(0, "17/07/2022", "Initial Block in the Chain", "0");
      }
    
      getLatestBlock() {
        return this.chain[this.chain.length - 1];
      }
      addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
       // newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
      }
    
      isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
          const currentBlock = this.chain[i];
          const prevBlock = this.chain[i - 1];
    
          if (currentBlock.hash !== currentBlock.calculateHash()) {
            return false;
          }
          if (currentBlock.prevHash !== prevBlock.hash) {
          return false;
        }
        return true;
      }
}
}


let MasehoCoin= new Blockchain();
console.log('Mining block 1...');
MasehoCoin.addBlock(new Block(1, "18/07/2020", {amount: 50 }));
console.log('Mining block 2...');
MasehoCoin.addBlock(new Block(2, "01/07/2020", {amount: 100}));
//console.log('Is blockchain valid? ' + MasehoCoin.isChainValid());


//console.log(JSON.stringify(MasehoCoin, null, 4));