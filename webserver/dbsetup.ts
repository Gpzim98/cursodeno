import { Database } from "https://deno.land/x/denodb/lib/database.ts";
import { GlobalSettings } from "./global_settings.ts";

export class DBSetup
{
    static GetDB(globalSettings : any)
    {
        let dbsettings = globalSettings.handler.config.db_setup;
        switch (dbsettings.engine)
        {
            case 'sqlite3':
                var dbPath = globalSettings.path + '/' + dbsettings.database;                
                return new Database(dbsettings.engine, {
                    filepath: dbPath,
                });
            case 'postgres':
                return new Database('postgres', {
                        host: dbsettings.host,
                        username: dbsettings.username,
                        password: dbsettings.password,
                        database: dbsettings.database,
                });
            default:
                throw new Error('Not possible to instanciate a DB connection');
        }
    }

    static async setupDb()
    {
        var globalSettings = GlobalSettings.GetInstance();
        const db = this.GetDB(globalSettings);
        
        for(let model of globalSettings.handler.config.models_to_sync)
        {
            try {
                db.link([model])
                await db.sync({drop: true});
                await db.close();
                console.log('Model ' + model.name + ' synced successfully');
            } catch (error) {                
                console.log('Model ' + model.name + ' already synced');
            }
        }
        console.log('DB synced successfully');
    }
}