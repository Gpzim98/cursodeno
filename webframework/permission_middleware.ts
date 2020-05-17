import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class PermissionMiddleware
{
    isAllowed(request : ServerRequest) : boolean
    {
        if (request.url == '/admin/')
            return false;
        else
            return true;
    }    
}