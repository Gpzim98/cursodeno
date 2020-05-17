import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { config } from '../../settings.ts';

export class HomeController
{
    public returnResponse(request : ServerRequest)
    {
        request.respond({ body: 'Welcome to home page of: ' + config.appname });
    }
}