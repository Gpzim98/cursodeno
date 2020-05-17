import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  console.log(req.conn.localAddr);
  //req.respond({ body: "<h1>Hello</h1>" });
  // Pretified
  //req.respond({ body: JSON.stringify(req, null, 2) });
}
