import { parse } from "https://deno.land/std/flags/mod.ts";

export class FlagsParser
{
    port: number
    constructor(args: string[])
    {
        var parsedArgs = parse(args);
        this.port = parsedArgs.port;
    }

    public getPort() : number
    {
        return this.port;
    }

}