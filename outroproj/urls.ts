import { TestController, ClienteController } from './apps/test/controllers.ts';

export var urls = [
    {reg: '^/test/$', controller: new TestController()},
    {reg: '^/cliente/$', controller: new ClienteController()},
    {reg: '^/administracao/$', controller: new ClienteController()},
]
