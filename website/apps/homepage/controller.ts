import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { ControllerBase } from "../../../webserver/ControllerBase.ts";


export class HomeController extends ControllerBase
{
    public async returnResponse(request : ServerRequest)
    {
        var params = { variable: 888 };
        request.respond(
            { body: await this.getFile("index.html", "homepage", params) });
    }
}

export class AboutController extends ControllerBase
{
    public async returnResponse(request : ServerRequest)
    {
        var params = { page_title: "Welcome to about page" };

        request.respond(
            { body: await this.getFile("about.html", "homepage", params) });
    }
}