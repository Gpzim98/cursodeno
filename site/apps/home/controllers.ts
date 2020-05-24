import { ControllerBase } from "../../../webserver/base_controller.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Home } from './models.ts';

export class HomeController extends ControllerBase
{
    public async get(context : RouterContext)
    {
        var users = await Home.getAll(Home);

        context.response.body = this.getFile("home.html", "home", { users });
    }

    public async postJson(context : RouterContext)
    {          
        var body = await context.request.body();             
        await Home.save(Home, { name: body.value.name});
        context.response.body = await Home.all();
    }

    public async post(context : RouterContext)
    {          
        var body = await context.request.body();      
        var form = new URLSearchParams(body.value);  
             
        await Home.save(Home, { name: form.get('name') });
        context.response.body = this.getFile("confirmation.html", "home", { name: form.get('name') });
    }
}