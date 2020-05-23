import { Database } from "https://deno.land/x/denodb/mod.ts";
import { Model } from 'https://deno.land/x/denodb/mod.ts';
import { GlobalSettings } from "../global_settings.ts";

export class BaseModel extends Model 
{
    static getDB() : Database
    {
        var globalSettings = GlobalSettings.GetInstance();
        var dbPath = globalSettings.path + 
            globalSettings.handler.config.db_setup.dbname;
    
          const db = new Database('sqlite3', {
              filepath: dbPath,
          });
        return db;  
    }
    static async getAll(model : any)
    {
        var db = this.getDB();
        db.link([model]);
        var resp = await model.all();
        db.close();
        return resp;
    }

    static async getModelById(model : any, id : string)
    {
        var db = this.getDB();
        db.link([model]);
        var resp = await model.where('id', id).get();
        db.close();
        return resp;
    }
  
  static async save(model : any, data : any)
  {
      var db = this.getDB();
      db.link([model]);
      await model.create(data);
      db.close();
  }

  static async deleteModel(model : any, id : string)
  {
      var db = this.getDB();
      db.link([model]);
      await model.deleteById(id);
      db.close();
  }
}