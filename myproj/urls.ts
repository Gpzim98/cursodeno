import { CustomerController } from './apps/customer/controllers.ts';

export var urls = [
    {reg: '^/proj/$', controller: new CustomerController()},
]
