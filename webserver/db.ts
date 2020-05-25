import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

class Flight extends Model {
    static table = 'flights';
    static timestamps = true;
  
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      departure: DATA_TYPES.STRING,
      destination: DATA_TYPES.STRING,
      flightDuration: DATA_TYPES.FLOAT,
    };
  
    static defaults = {
      flightDuration: 2.5,
    };
  }

const db = new Database('postgres', {
  host: 'localhost',
  username: 'postgres',
  password: 'deno',
  database: 'airlines',
});


db.link([Flight]);
await db.sync({drop: true});
await db.close();
