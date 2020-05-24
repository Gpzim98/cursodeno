import { Application } from "https://deno.land/x/oak/application.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";
import { router } from '../website/urls.ts';
import { DBSetup } from "./dbsetup.ts";

const { args } = Deno;

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.path = flagsParser.getPath();

var fullPath = globalSettings.path + '/settings.ts';
import(fullPath).then((handler) => {
    globalSettings.handler = handler;

    if(flagsParser.getSyncDb())
        DBSetup.setupDb();
});

const app = new Application();
app.use(router.routes());

await app.listen({ port: 8000 });