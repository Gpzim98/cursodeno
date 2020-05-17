const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";
console.dir(parse(args));

var b = parse(args);
console.log(b.curso);
console.log(b.test);
