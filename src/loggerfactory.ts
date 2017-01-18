import { ILogger } from "./ilogger";
import { LogType } from "./logtype";
import { ConsoleLogger } from "./consolelogger"
import { NullLogger } from "./nulllogger"
import { MultiLogger } from "./multilogger"
import { LogOption } from "./logoption"


export function build(option: Array<LogOption> | LogOption) : ILogger {
    if(Array.isArray(option)) {
        const logger = new MultiLogger();
        option.forEach(logOption => {
            logger.addLogger(create(logOption))
        })
        return logger;
    } else {
        return create(option);
    }
}

export function create(option: LogOption): ILogger {
    switch (option.logType) {
        case LogType.CONSOLE:
            return new ConsoleLogger(option.logLevel);
        case LogType.NULL:
            return new NullLogger();
    }
    
}