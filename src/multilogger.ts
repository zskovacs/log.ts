import { ILogger } from "./ILogger";

export class MultiLogger implements ILogger {
    private loggers: Array<ILogger>;

    constructor() {
        this.loggers = new Array<ILogger>();
    }

    public debug(message: string, obj?: Object) {
        this.loggers.forEach(l => {
            l.debug(message, obj);
        });
    }

    public info(message: string, obj?: Object) {
        this.loggers.forEach(l => {
            l.info(message, obj);
        });
    }

    public warning(message: string, obj?: Object) {
        this.loggers.forEach(l => {
            l.warning(message, obj);
        });
    }

    public error(message: string, obj?: Object) {
        this.loggers.forEach(l => {
            l.error(message, obj);
        });
    }

    public addLogger(logger: ILogger) {
        this.loggers.push(logger);
    }
}
