import { v4, v5 } from "https://deno.land/std/uuid/mod.ts";
// Generate a v4 uuid
const myUUID = v4.generate();
console.log(myUUID);

// Validate a v4 uuid
const isValid = v4.validate(myUUID);
console.log(isValid);

const uuid5 = v5.generate({
    value: "Hello, World",
    namespace: "1b671a64-40d5-491e-99b0-da01ff1f3341",
});

console.log(uuid5);
