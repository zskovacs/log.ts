import { ILogger } from "./ilogger";
import { LogLevel } from "./loglevel";

export class MultiLogger implements ILogger {
    private loggers: Array<ILogger>;

    constructor() {
        this.loggers = new Array<ILogger>();
    }

    public debug(message: string, obj?: Object): void  {
        this.loggers.forEach(l => {
            l.debug(message, obj);
        });
    }

    public info(message: string, obj?: Object): void  {
        this.loggers.forEach(l => {
            l.info(message, obj);
        });
    }

    public warning(message: string, obj?: Object): void  {
        this.loggers.forEach(l => {
            l.warning(message, obj);
        });
    }

    public error(message: string, obj?: Object): void  {
        this.loggers.forEach(l => {
            l.error(message, obj);
        });
    }

    public addLogger(logger: ILogger): void  {
        this.loggers.push(logger);
    }

    public addLevel(level: LogLevel): void {
        this.loggers.forEach(logger => {
            logger.addLevel(level);
        })
        
    }

    public removeLevel(level: LogLevel): void {
        this.loggers.forEach(logger => {
            logger.removeLevel(level);
        })
    }
}
