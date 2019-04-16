import oracledb from 'oracledb';

export const config = {
  db: {
    user : 'consensys_demo',
    password : 'consensys_demo',
    connectString: 'consensys-demo.cfv6mengrw7e.us-east-1.rds.amazonaws.com:1521/ORCL',
    database : 'ORCL'
  }
};

export const init = async () => {
  await oracledb.createPool(config.db);
}

export const close = async () => {
  await oracledb.getPool().close();
}

export const execute = async (statement: any) => {
  return new Promise(async (resolve, reject) => {
    let connection;

    const opts = {
      outFormat: oracledb.OBJECT
    };

    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(statement, [], opts);

      resolve(result);
      await connection.close();
    }
    catch (e) {
      reject(e);
    }
  });
}
