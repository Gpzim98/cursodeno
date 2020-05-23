import { HomeController, AboutController } from './apps/homepage/controller.ts';
import { Router } from "https://deno.land/x/oak/mod.ts";

export var router = new Router();

router
    .get('/users', (context) => 
        new HomeController().get(context))
    .get('/about', (context) =>
        new AboutController().returnResponse(context))
    .post('/users', async (context) =>
         new HomeController().post(context))
    .put('/users/:id', (context) =>        
        new HomeController().put(context))
    .delete('/users/:id', (context) => 
        new HomeController().delete(context))
    .all('/users/:id', (context) => 
        new HomeController().all(context)
    );
