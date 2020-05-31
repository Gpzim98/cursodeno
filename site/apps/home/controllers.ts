import { ControllerBase } from "../../../webserver/base_controller.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Home, Customer } from './models.ts';

export class HomeController extends ControllerBase
{
    public async get(context : RouterContext)
    {
        var customers = await Customer.getAll(Customer);
        context.response.body = this.getFile("home.html", "home", { customers });
    }

    public async getById(context : RouterContext)
    {                     
        try {
            let id : string | undefined = context.params.id;
        
            if(id)
            {
                var customers = await Customer.getModelById(Customer, id);
                context.response.body = this.getFile("customerDetail.html", "home", { customer : customers[0] });
            }
            else
                context.response.body = "Id needs to be provided";
        } catch (error) {
            console.log(error); 
        }
    }

    async deleteCustomer(context: RouterContext)
    {        
        try {
            var id = context.params.id;
            if(id)
                await Customer.deleteModel(Customer, id);
            context.response.body = "Customer deleted successfully"
        } catch (error) {
            context.response.body = "There was an error when trying to delete a Customer"
        }
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
             
        await Customer.save(Customer, { name: form.get('name') });
        context.response.body = this.getFile("confirmation.html", "home", { name: form.get('name') });
    }
}