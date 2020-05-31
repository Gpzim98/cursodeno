import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";

const app = new Application();

const { args } = Deno;

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.path = flagsParser.importPath;

import(flagsParser.getImportPath() + "/settings.ts").then((handler)=>{
  globalSettings.handler = handler;

  var server_path = globalSettings.path + '/' + globalSettings.handler.config.static_folder;
  
  app.use(async (context) => {
      await send(context, context.request.url.pathname, {
        root: server_path,
        index: "index.html",
      });
  });

  app.listen({ port: flagsParser.getPort() });
});
