import { FlagsParser } from './flags_parser.ts';
import { serve, Server } from "https://deno.land/std/http/server.ts";

export class DenoServer
{
    s : Server
    constructor()
    {
        const { args } = Deno;
        var flagsParser = new FlagsParser(args);
    
        this.s = serve({ port: flagsParser.getPort() });
        console.log("Running on port: " + flagsParser.getPort());    
    }

    async run() : Promise<void>
    {
        for await (const req of this.s) {
            var resp = req.url;
            
            var regexp = new RegExp('^/customer'),
            test = regexp.test(resp.toString());

            req.respond({ body: resp.toString() + String(test) });
        } 
    }
};

const d = new DenoServer();
await d.run();