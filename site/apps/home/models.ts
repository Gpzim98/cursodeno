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


export class Customer extends BaseModel {
  static table = 'customers';
  static timestamps = true;
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DATA_TYPES.STRING,
    address: DATA_TYPES.STRING,
  };
}
