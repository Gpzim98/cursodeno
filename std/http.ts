import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8765 });

var a = '{ "name":"John", "age":30, "city":"New York"}'

for await (const req of s) {
    var resp = req.url;
    
    var a = await Deno.realPath(req.url);
    console.log(a);
    
    req.respond({ body: a });
} 