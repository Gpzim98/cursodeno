import { parse } from "https://deno.land/std/flags/mod.ts";

export class FlagsParser
{
    port : number;
    handler : any;

    constructor(args : string[])
    {
        var params = parse(args);
        this.port = params.port;      
        this.handler = params.handler;  
        console.log('Handler: ' + this.handler);
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