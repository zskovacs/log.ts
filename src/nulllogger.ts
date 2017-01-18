import { ILogger } from "./ilogger";
import { LogLevel } from "./loglevel";

export class NullLogger implements ILogger {
    public debug(message: string, obj?: Object): void  {
    }

    public info(message: string, obj?: Object): void  {
    }

    public warning(message: string, obj?: Object): void  {
    }

    public error(message: string, obj?: Object): void {
    }

    public addLevel(level: LogLevel): void {
    }
    
    public removeLevel(level: LogLevel): void {
    }
}
