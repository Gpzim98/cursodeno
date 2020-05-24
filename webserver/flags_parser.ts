import { parse } from "https://deno.land/std@0.53.0/flags/mod.ts";

export class FlagsParser
{
    port : number;
    handler : any;
    syncdb? : string;
    path : string;

    constructor(args : string[])
    {
        var params = parse(args);
        this.port = params.port;      
        this.handler = params.handler;
        this.syncdb = params.sync;
        this.path = this.handler;
        console.log('Handler: ' + this.handler);
    }

    getPath()
    {
        return this.path;
    }

    getSyncDb()
    {
        return this.syncdb?.toUpperCase() === 'YES';
    }

    getPort() : number
    {
        if(!this.port)
            this.port = 8000;
        return this.port;
    }

    getHandler() : string
    {
        return this.handler + "/settings.ts";
    }
}