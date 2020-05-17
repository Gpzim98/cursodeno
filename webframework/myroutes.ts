import { CustomerController } from "./mycontroller.ts";
import { CourseController } from "./coursecontroller.ts";

export var urls = [
    {reg: '^/customer/\\d+/', controller: new CustomerController()},
    {reg:'^/course/\\d+/', controller: new CourseController()},
    {reg:'^/profile/$', controller: new CustomerController()},
    {reg:'^/admin/$', controller: new CustomerController()}
]
