import { ILogger } from "./ilogger";

export class NullLogger implements ILogger {
    public debug(message: string, obj?: Object) {
    }

    public info(message: string, obj?: Object) {
    }

    public warning(message: string, obj?: Object) {
    }

    public error(message: string, obj?: Object) {
    }
}
