import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';

export class Home extends Model {
    static table = 'home';
    static timestamps = true;
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      name: DATA_TYPES.STRING,
    };
}

export class Enquete extends Model {
    static table = 'enquente';
    static timestamps = true;
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      enquete_name: DATA_TYPES.STRING,
    };
}