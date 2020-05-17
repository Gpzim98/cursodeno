import { readFileStr } from 'https://deno.land/std@v0.50.0/fs/read_file_str.ts';
import { writeFileStr } from 'https://deno.land/std/fs/write_file_str.ts';

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();
var data = await Deno.readFile("file.txt");
console.log(decoder.decode(data));

// deno run --allow-read readfile.ts
// Using a built in wrapper for the Deno.readFile
console.log(await readFileStr("file.txt"));

let s = "Test";

writeFileStr("myfile.txt", s);
