import { ILogger } from "./ilogger";
import { LoggerBase } from "./loggerbase";
import { LogLevel } from "./loglevel";

export class ConsoleLogger extends LoggerBase implements ILogger {
    constructor(logLevel?: LogLevel) {
        super();
        if (logLevel) {
            this.logLevel = logLevel;
        }
    }

    public debug(message: string, obj?: Object) {
        if (this.logLevel & LogLevel.DEBUG) {
            let format = `${this.getLocalDateTime()}: [DEBUG] - ${message}`;
            if (obj) {
                console.log(format, obj);
            } else {
                console.log(format);
            }
        }
    }

    public info(message: string, obj?: Object) {
        if (this.logLevel & LogLevel.INFO) {
            let format = `${this.getLocalDateTime()}: [INFO] - ${message}`;
            if (obj) {
                console.info(format, obj);
            } else {
                console.info(format);
            }
        }
    }

    public warning(message: string, obj?: Object) {
        if (this.logLevel & LogLevel.WARN) {
            let format = `${this.getLocalDateTime()}: [WARN] - ${message}`;
            if (obj) {
                console.warn(format, obj);
            } else {
                console.warn(format);
            }
        }
    }

    public error(message: string, obj?: Object) {
        if (this.logLevel & LogLevel.ERROR) {
            let format = `${this.getLocalDateTime()}: [ERROR] - ${message}`;
            if (obj) {
                console.error(format, obj);
            } else {
                console.error(format);
            }
        }
    }

    private getLocalDateTime(): string {
        const date = new Date();
        return date.toLocaleTimeString();
    }
}
