import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class CouseController
{
    public returnResponse(request : ServerRequest)
    {
        request.respond({ body: 'Myapp Course'});
    }
}