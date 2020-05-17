import { Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { User } from './base_models.ts';

export class DBSetup
{
    db : Database;
    constructor(dbname: string, dbengine: string)
    {
        switch (dbengine)
        {
            case "sqlite3":
                console.log('Tentando criar db: ' + dbname)
                this.db = new Database("sqlite3", { filepath: dbname });
                break;
            case "mysql":
                this.db = new Database("mysql", { filepath: dbname });
                break;
            case "postgres":
                this.db = new Database("postgres", { filepath: dbname });
                break;
            default:
                throw new Error("Engine not implemented");
        }
    }

    async syncdb()
    {
        this.db.link([User]);
        await this.db.sync({drop: true});
        await User.create({ name: 'Amelia' });
        await User.create({ name: 'Gregory' });
        await this.db.close();
        console.log('Db created');
    }

    async syncAllModels(models: typeof Model[])
    {
        console.log('Starting to sync db...');
        this.db.link(models);
        await this.db.sync({drop: true});
        await this.db.close();
        console.log('DB successfully synced!');
    }
}