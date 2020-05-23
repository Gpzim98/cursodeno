import { UsersController, AboutController } from './apps/homepage/controller.ts';
import { Router } from "https://deno.land/x/oak/mod.ts";

export var router = new Router();

router
    .get('/users', (context) => 
        new UsersController().get(context))
    .get('/users/:id', (context) =>        
        new UsersController().getById(context))
    .get('/about', (context) =>
        new AboutController().returnResponse(context))
    .post('/users', async (context) =>
         new UsersController().post(context))
    .put('/users/:id', (context) =>        
        new UsersController().put(context))
    .delete('/users/:id', (context) => 
        new UsersController().delete(context))
    .all('/users/:id', (context) => 
        new UsersController().all(context)
    );
