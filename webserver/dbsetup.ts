import { Database } from "https://deno.land/x/denodb/mod.ts";
import { GlobalSettings } from "./global_settings.ts";

export class DBSetup
{
    static async setupDb()
    {
        var globalSettings = GlobalSettings.GetInstance();
        var dbPath = globalSettings.path + 
            globalSettings.handler.config.db_setup.dbname;
    
        const db = new Database('sqlite3', {
            filepath: dbPath,
        });

        db.link(globalSettings.handler.config.models_to_sync)

        await db.sync({drop: true});
        await db.close();
        console.log('DB synced successfully');
    }
}