import * as LogFactory from "../src/loggerfactory";

//This will only logs ERRORS!!
var options: Array<LogFactory.LogOption> = [{
    logLevel: LogFactory.LogLevel.ALL,
    logType: LogFactory.LogType.CONSOLE,
},{
    logLevel: LogFactory.LogLevel.ERROR | LogFactory.LogLevel.WARN,
    logType: LogFactory.LogType.LOCALSTORAGE,
}];

var logger = LogFactory.build(options);

//This will only log to CONSOLE
logger.debug("Testing debug...", { name: "Object name" });

//This will log to CONSOLE and LOCALSTORAGE
logger.error("Testing error...");
logger.warning("Testing warn...");