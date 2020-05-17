import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class PermissionsMiddleware
{
    userIsAllowed(request: ServerRequest) : boolean
    {
        var expression = '^/administracao/$';
        var regexp = new RegExp(expression);
        
        return !regexp.test(request.url);
    }
}