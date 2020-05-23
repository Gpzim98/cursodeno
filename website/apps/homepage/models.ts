import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';
import { Database } from "https://deno.land/x/denodb/mod.ts";
import { GlobalSettings } from "../../../webserver/global_settings.ts";

export class BaseModel extends Model 
{
  static async save(model : any, data : any)
  {
    var globalSettings = GlobalSettings.GetInstance();
    var dbPath = globalSettings.path + 
        globalSettings.handler.config.db_setup.dbname;

      const db = new Database('sqlite3', {
          filepath: dbPath,
      });
      
      db.link([model]);
      
      await model.create(data);
      db.close();
  }

}

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