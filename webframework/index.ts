import { FlagsParser } from './flags_parser.ts';
import { serve, Server } from "https://deno.land/std/http/server.ts";
import { RouterResolver } from './routes.ts';

export class DenoServer
{
    s : Server
    urlResolver : RouterResolver
    constructor()
    {
        const { args } = Deno;
        var flagsParser = new FlagsParser(args);
        this.urlResolver = new RouterResolver();

        this.s = serve({ port: flagsParser.getPort() });
        console.log("Running on port: " + flagsParser.getPort());    
    }

    async run() : Promise<void>
    {
        for await (const req of this.s) {
            this.urlResolver.getUrlController(req);
        } 
    }
};

const d = new DenoServer();
await d.run();