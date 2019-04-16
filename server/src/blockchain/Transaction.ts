export default class Transaction
{
  public source: string;
  public target: string;
  public amount: number;
  public timestamp: number;
  public signature: any;

  constructor(source: string, target: string, amount: number)
  {
    this.source = source;
    this.target = target;
    this.amount = amount;
    this.timestamp = Date.now();
    this.signature = null;
  }

  sign(tx: any, key: any): any
  {
    this.signature = key.sign(JSON.stringify(tx));
  }
}