import Block from './Block';

export default class Blockchain
{
  public chain: Array<Block> = [];

  constructor()
  {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock()
  {
    return new Block([], Date.now(), '0');
  }

  add(block: Block)
  {
    const { hash } = this.getPreviousBlock();
    block.previousHash = hash;

    this.chain.push(block);
  }

  getPreviousBlock()
  {
    return this.chain[this.chain.length - 1];
  }
}
