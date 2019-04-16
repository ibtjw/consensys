import app from './app';
import * as db from './database';
import compression from 'compression';
import helmet from 'helmet';

app.use(helmet());
app.use(compression());

app.disable('x-powered-by');

export const main = async () => {

  try {
    console.log('starting the db');
    await db.init();
  }
  catch (e) {
    console.log(e);
    process.exit(1);
  }

  app.listen(5000, () => console.log('starting server on port 5000'));
}

main();