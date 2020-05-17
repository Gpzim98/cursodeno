import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    file: new log.handlers.FileHandler("DEBUG", {
      filename: "./log.txt",
      formatter: "{levelName} {msg}",
    }),
  },
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
    tasks2: {
        level: "INFO",
        handlers: ["console", "file"],
      },
  },
});

let logger;
// logger = log.getLogger();
// logger.debug("Linha 1 debug"); // logs to `console`, because `file` handler requires "WARNING" level
// logger.warning("Linha 2 warning"); // logs to both `console` and `file` handlers

// get custom logger
logger = log.getLogger("tasks2");
logger.debug("fizz"); // won't get output because this logger has "ERROR" level
logger.error("buzz"); // log to `console`
logger.critical("Critical");
