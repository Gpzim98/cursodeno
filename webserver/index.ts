import { FlagsParser } from "./flags_parser.ts";
import { Server, serve } from "https://deno.land/std/http/server.ts";
import { RouterResolver } from './routes.ts';
import { appname } from '../myproj/settings.ts';

const { args } = Deno;
class WebServer
{
    s : Server;
    handler : any;
    flagsParser : FlagsParser;

    constructor()
    {
        this.flagsParser = new FlagsParser(args);
        this.s = serve({ port: this.flagsParser.getPort() });
        console.log("Running on ports: " + this.flagsParser.getPort()); 
    }

    async run() : Promise<void>
    {
        var realPath = this.flagsParser.getHandler();
        await import(realPath).then(handler =>{
            var urlResolver : RouterResolver = new RouterResolver(handler);
            this.executeLoop(urlResolver);
        });
    }

    async executeLoop(urlResolver: RouterResolver)
    {
        for await (const req of this.s)
            urlResolver.getUrlController(req);
    }
}

var server = new WebServer();
await server.run();
