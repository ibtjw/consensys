import Blockchain from './Blockchain';
import Transaction from './Transaction';

import crypto from 'crypto';

export default class Block
{
  public transactions: Array<Transaction>;
  public previousHash: string;
  public timestamp: number;
  public hash: string;

  constructor(transactions: Array<Transaction>, timestamp: number, previousHash = '')
  {
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.timestamp = timestamp;

    this.hash = this.calculateHash(`
      ${previousHash} + ${timestamp} + ${JSON.stringify(transactions)}
    `);
  }

  calculateHash(string: string): string
  {
    return crypto
      .createHash('sha256')
      .update(string)
      .digest('hex');
  }
}