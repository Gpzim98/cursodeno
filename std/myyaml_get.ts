import { parse, stringify, parseAll } from "https://deno.land/std/encoding/yaml.ts";
const data = parse(`
foo: bar
baz:
  - qux
  - quux
`);
console.log(data);
// => { foo: "bar", baz: [ "qux", "quux" ] }
const yaml = stringify({ foo: "bar", baz: ["qux", "quux"] });
console.log(yaml);

const data2 = parseAll(`
---
id: 1
name: Alice
---
id: 2
name: Bob
---
id: 3
name: Eve
`);
console.log(data2);