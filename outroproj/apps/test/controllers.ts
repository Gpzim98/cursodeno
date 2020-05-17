import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { appname } from '../../settings.ts';

export class TestController
{
    public returnResponse(request : ServerRequest)
    {
        request.respond({ body: 'Welcome to ' + appname});
    }
}

export class ClienteController
{
    public returnResponse(request : ServerRequest)
    {
        request.respond({ body: 'Welcome to cliente ap'});
    }
}