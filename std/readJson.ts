import { readJson } from "https://deno.land/std/fs/mod.ts";

const f = await readJson("./myfile.json");

console.log(f);
