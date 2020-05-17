import { move } from "https://deno.land/std@0.51.0/fs/move.ts";

move("./f1.txt", "./bar2/f1.txt", { overwrite: true }); // returns a promise
// moveSync("./foo", "./bar"); // void
// moveSync("./foo", "./existingFolder", { overwrite: true });
// Will overwrite existingFolder