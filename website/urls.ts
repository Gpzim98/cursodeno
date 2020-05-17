import { HomeController } from './apps/homepage/controller.ts';

export var urls = [
    {reg: '^$', controller: new HomeController()},
    {reg: '^/$', controller: new HomeController()},
    {reg: '^/home$', controller: new HomeController()},
    {reg: '^/home/$', controller: new HomeController()},
    {reg: '^/administracao/$', controller: new HomeController()},
]
