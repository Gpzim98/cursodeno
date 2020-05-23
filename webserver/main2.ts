import { Application } from "https://deno.land/x/oak/mod.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";
import { router } from '../website/urls.ts';

const { args } = Deno;

var flagsParser : FlagsParser;
var globalSettings : GlobalSettings;
flagsParser = new FlagsParser(args);
globalSettings = GlobalSettings.GetInstance();
globalSettings.path = flagsParser.getPath();

const app = new Application();
app.use(router.routes());

await app.listen({ port: 8000 });