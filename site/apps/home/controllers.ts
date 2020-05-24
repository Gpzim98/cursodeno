import { ControllerBase } from "../../../webserver/base_controller.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";

export class HomeController extends ControllerBase
{
    public async get(context : RouterContext)
    {
        context.response.body = this.getFile("home.html", "home");
    }
}