import { writeJson } from "https://deno.land/std/fs/mod.ts";

var json = { 
    "foo": 123, 
    "foo2": "Abc",
    "Customer": { "Name": "Joao", "Age": 55 }
 }

//var filter = ["foo3"]

writeJson("myfile.json", json, { spaces: 2 });
