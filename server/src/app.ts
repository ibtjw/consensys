import express, { Request, Response } from 'express';

import * as db from './database';

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/transactions', async (req: Request, res: Response) => {
  let result;

  try {
    result = await db.execute('select * from consensys_demo.transactions');
  }
  catch (e) {
    throw new Error('something terrible happened.');
  }

  res.send(result);
});

export default app;
