import { FlagsParser } from "./flags_parser.ts";
import { Server, serve } from "https://deno.land/std/http/server.ts";
import { RouterResolver } from './routes.ts';
import { DBSetup } from './models/db_setup.ts'; 

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

    async run()
    {
        import(this.flagsParser.getHandler()).then(hander => {
            var dbsetup = new DBSetup(
                hander.config.db_setup.dbname,
                hander.config.db_setup.dbengine
            );
            dbsetup.syncdb();
            this.executeAsyncLoop(hander);
        });
    }

    async executeAsyncLoop(handler : any) : Promise<void>
    {
        var urlResolver = new RouterResolver(handler.global_urls);
        for await (const req of this.s)
            urlResolver.getUrlController(req);
    }
}

var server = new WebServer();
await server.run();
