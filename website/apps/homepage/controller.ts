import { ControllerBase } from "../../../webserver/base_controller.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Home } from '../homepage/models.ts';


export class UsersController extends ControllerBase
{
    public async get(context : RouterContext)
    {                       
        context.response.body = await Home.getAll(Home);
    }

    public async getById(context : RouterContext)
    {                     
        try {
            let id : string | undefined = context.params.id;
        
            if(id)
            {
                var resp = await Home.getModelById(Home, id);
                context.response.body = resp;
            }
            else
                context.response.body = "Id needs to be provided";
        } catch (error) {
            console.log(error); 
        }
    }

    public async post(context : RouterContext)
    {          
        var body = await context.request.body();             
        await Home.save(Home, {enquete_name: body.value.name});
        context.response.body = await Home.all();
    }

    public put(context : RouterContext)
    {                           
        context.response.body = "put";
    }

    public async delete(context : RouterContext)
    {                     
        try {
            let id : string | undefined = context.params.id;
        
            if(id)
            {
                await Home.deleteModel(Home, id);
                context.response.body = "Object deleted";
            }
            else
                context.response.body = "Id needs to be provided";
        } catch (error) {
            console.log(error); 
        }
    }

    public async all(context : RouterContext)
    {                       
        context.response.body = await Home.all();
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
        context.response.body = this.getFile("about.html", "homepage");
    }
}