import { Application } from "https://deno.land/x/oak/application.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";
import { DBSetup } from "./dbsetup.ts";

const { args } = Deno;
const app = new Application();

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.path = flagsParser.importPath;

import(flagsParser.getImportPath() + "/settings.ts").then((handler)=>{
    globalSettings.handler = handler;
    if(flagsParser.getSyncDb())
        DBSetup.setupDb();
});

import(flagsParser.getImportPath() + "/urls.ts").then((urls)=>{
    app.use(urls.router.routes());
    app.listen({ port: flagsParser.getPort() });
});

