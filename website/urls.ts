import { HomeController, AboutController } from './apps/homepage/controller.ts';

export var urls = [
    {reg: '^$', controller: new HomeController()},
    {reg: '^/$', controller: new HomeController()},
    {reg: '^/home$', controller: new HomeController()},
    {reg: '^/home/$', controller: new HomeController()},
    {reg: '^/about/$', controller: new AboutController()},
    {reg: '^/administracao/$', controller: new HomeController()},
]
