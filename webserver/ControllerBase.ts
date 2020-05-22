import { DenoServer } from './DenoServer.ts';
import denjucks from "https://deno.land/x/denjucks/mod.js";

export class ControllerBase extends DenoServer
{
    getFile(templateName: string, appname : string, params : any = null)
    {
        denjucks.configure(this.globalSettings.path + "/apps/" + appname + "/templates/");
        return denjucks.render(templateName, params);
    }
}