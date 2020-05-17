import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class CourseController
{
    public returnResponse(request : ServerRequest)
    {
        request.respond({ body: 'Course'});
    }
}