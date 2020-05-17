import { parse } from "https://deno.land/std/flags/mod.ts";

export class FlagsParser
{
    port : number;
    handler : any;
    syncdb? : string;

    constructor(args : string[])
    {
        var params = parse(args);
        this.port = params.port;      
        this.handler = params.handler;
        this.syncdb = params.sync;
        console.log('Handler: ' + this.handler);
    }

    getSyncDb()
    {
        return this.syncdb?.toUpperCase() === 'YES';
    }

    getPort() : number
    {
        return this.port;
    }

    getHandler() : string
    {
        return this.handler;
    }
}