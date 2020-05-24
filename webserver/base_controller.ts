import { DenoServer } from './deno_server.ts';
import denjucks from "https://deno.land/x/denjucks/mod.js";

export class ControllerBase extends DenoServer
{
    getFile(templateName: string, appname : string, params : any = null)
    {
        if(!params)
            params = {}
        
        params['STATIC_URL'] = this.globalSettings.handler.config.static_url;
        denjucks.configure(this.globalSettings.path + "/apps/" + appname + "/templates/");
        return denjucks.render(templateName, params);
    }
}