import * as LogFactory from "../src/loggerfactory";

//This will only logs ERRORS!!
var options: LogFactory.LogOption = {
    logLevel: LogFactory.LogLevel.ERROR,
    logType: LogFactory.LogType.CONSOLE,
}

var logger = LogFactory.build(options);

//This will not show the log, because the level is set to ERROR
logger.debug("Testing debug...", { name: "Object name" });

//These will add INFO and WARN but remove ERROR from the log
logger.addLevel(LogFactory.LogLevel.INFO);
logger.addLevel(LogFactory.LogLevel.WARN);
logger.removeLevel(LogFactory.LogLevel.ERROR);