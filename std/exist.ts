import { exists } from "https://deno.land/std@0.51.0/fs/exists.ts";

var a = exists("./folder/myfile.json");

console.log(await a);
