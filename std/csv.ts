import { parse } from "https://deno.land/std/encoding/csv.ts";
import { writeFileStr } from 'https://deno.land/std/fs/write_file_str.ts';

const string = "a,b,c\nd,e,f";

var a = await parse(string, {
    header: false,
});

writeFileStr("mycs.csv", a.toString());

console.log(a);