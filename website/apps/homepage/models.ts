import { DATA_TYPES } from 'https://deno.land/x/denodb/mod.ts';
import { BaseModel } from '../../../webserver/models/base_model.ts';

export class Home extends BaseModel {
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

export class Enquete extends BaseModel {
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


export class Enquete2 extends BaseModel {
  static table = 'enquente2';
  static timestamps = true;
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    enquete_name: DATA_TYPES.STRING,
  };
}