import { CustomerController } from './customer_controller.ts';
import { CouseController } from './course_controller.ts';
import { ProfileController } from './profile_controller.ts';

export var urls = [
    {reg: '^/customer/\\d+/', controller: new CustomerController() },
    {reg: '^/course/\\d+/', controller: new CouseController()},
    {reg: '^/profile/$', controller: new ProfileController()},
    {reg: '^/admin/$', controller: new ProfileController()},
    {reg: '^/administracao/$', controller: new ProfileController()}
]
