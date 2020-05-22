import { Database } from 'https://deno.land/x/denodb/mod.ts';

export class WebDenoUtils
{
    static getDb(dbname: string) : Database
    {
        return new Database("sqlite3", { filepath: dbname });
    }
}