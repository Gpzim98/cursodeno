import { copy } from "https://deno.land/std@0.51.0/fs/copy.ts";


copy("file.txt", "bar/file.txt", { overwrite: true });
