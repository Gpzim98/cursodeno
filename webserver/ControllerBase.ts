import { readFileStr } from 'https://deno.land/std@v0.50.0/fs/read_file_str.ts';
import { DenoServer } from './DenoServer.ts';

export class ControllerBase extends DenoServer
{
    async getFile(templateName: string, appname : string)
    {
        var fullpath = this.globalSettings.path + "/apps/" + appname + "/templates/" + templateName;
        console.log(fullpath);
        
        return await readFileStr(fullpath);
    }
}