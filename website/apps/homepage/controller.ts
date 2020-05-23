import { ControllerBase } from "../../../webserver/ControllerBase.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Home } from '../homepage/models.ts';


export class UsersController extends ControllerBase
{
    public get(context : RouterContext)
    {                       
        
        context.response.body = this.getFile("index.html", "homepage");
    }

    public async post(context : RouterContext)
    {          
        var body = await context.request.body();             
        await Home.save(Home, {name: body.value.name});
        context.response.body = await Home.all();
    }

    public put(context : RouterContext)
    {                           
        context.response.body = "put";
    }

    public delete(context : RouterContext)
    {                       
        context.response.body = "delete";
    }

    public all(context : RouterContext)
    {                       
        context.response.body = "all";
    }
}

export class OutroController extends ControllerBase
{
    public async returnResponse(context : RouterContext)
    {
        context.response.body = this.getFile("about.html", "homepage");
    }
}

export class AboutController extends ControllerBase
{
    public async returnResponse(context : RouterContext)
    {
        context.response.body = "From AboutController";

    }
}