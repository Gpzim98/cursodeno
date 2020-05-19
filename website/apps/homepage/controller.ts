import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { ControllerBase } from "../../../webserver/ControllerBase.ts";


export class HomeController extends ControllerBase
{
    public async returnResponse(request : ServerRequest)
    {
        request.respond({ body: await this.getFile("index.html", "homepage") });
    }
}

export class AboutController extends ControllerBase
{
    public async returnResponse(request : ServerRequest)
    {
        request.respond({ body: await this.getFile("about.html", "homepage") });
    }
}