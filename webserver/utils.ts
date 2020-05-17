import { Database } from 'https://deno.land/x/denodb/mod.ts';

export class WebDenoUtils
{
    getDb(dbname: string)
    {
        return new Database("sqlite3", { filepath: dbname });
    }
}