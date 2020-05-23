import { ControllerBase } from "../../../webserver/ControllerBase.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Home } from '../homepage/models.ts';
import { Database } from "https://deno.land/x/denodb/mod.ts";

export class HomeController extends ControllerBase
{
    public get(context : RouterContext)
    {                       
        context.response.body = this.getFile("index.html", "homepage");
    }

    public async post(context : RouterContext)
    {                       
        const db = new Database('sqlite3', {
            filepath: 'newdb.sqlite3',
        });
        
        db.link([Home]);
        
        await Home.create({name: '1'});
        db.close();

        context.response.body = "Post";
    }

    public put(context : RouterContext)
    {                       
        context.response.body = "put";
    }

    public delete(context : RouterContext)
    {                       
        context.response.body = "dekete";
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