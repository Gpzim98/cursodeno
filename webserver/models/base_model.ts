import { Database } from "https://deno.land/x/denodb/lib/database.ts";
import { Model } from 'https://deno.land/x/denodb/lib/model.ts';
import { GlobalSettings } from "../global_settings.ts";
import { DBSetup } from "../dbsetup.ts";

export class BaseModel extends Model 
{
    static getDB() : Database
    {
        var globalSettings = GlobalSettings.GetInstance();        
        var db = DBSetup.GetDB(globalSettings);
        return db;
    }
    static async getAll(model : any)
    {
        try {
            var db = this.getDB();
            db.link([model]);
            var resp = await model.all();
            await db.close();
            return resp;
        } catch (error) {
            console.log(error);
        }
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

  static async updateModel(model : any, id : string, data : any)
  {
      var db = this.getDB();
      db.link([model]);
      var resp = await model.where('id', id).update(data);
      db.close();
      return resp;
  }
}