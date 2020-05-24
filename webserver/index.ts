import { Application } from "https://deno.land/x/oak/application.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";
import { DBSetup } from "./dbsetup.ts";

const { args } = Deno;
const app = new Application();

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.path = flagsParser.getPath();

var fullPath = globalSettings.path + '/settings.ts';
import(fullPath).then((handler) => {
    globalSettings.handler = handler;

    if(flagsParser.getSyncDb())
        DBSetup.setupDb();
});

var fullPathURL = globalSettings.path + '/urls.ts';
import(fullPathURL).then((handler) => {
    app.use(handler.router.routes());
    console.log('Running on port: ' + flagsParser.getPort());
    
    app.listen({ port: flagsParser.getPort() });
});

