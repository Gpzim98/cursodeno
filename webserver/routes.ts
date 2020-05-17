import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { PermissionsMiddleware } from './middlewares/PermissionsMiddleware.ts';

export class RouterResolver
{
    permissionMiddleware : PermissionsMiddleware = new PermissionsMiddleware();
    urls : any;

    constructor(urls: any)
    {
        this.urls = urls;
    }

    urlMatches(pattern: string, url: string) : boolean
    {
        var regexp = new RegExp(pattern);
        return regexp.test(url);
    }

    getUrlController(request : ServerRequest)
    {       
        var urlNotFound = false;

        for (let set of this.urls)
            if(this.urlMatches(set.reg, request.url))
                if (this.permissionMiddleware.userIsAllowed(request))
                {
                    urlNotFound = true;
                    set.controller.returnResponse(request);
                }
                else
                {
                    urlNotFound = true;
                    request.respond({ body: 'Not allowed'});
                }

        if (!urlNotFound)
            request.respond({ body: '404'});
    }
}