import { LogLevel } from "./loglevel";

export abstract class LoggerBase {
    protected logLevel = LogLevel.NONE;

    public addLevel(level: LogLevel): void {
        this.logLevel |= level;
    }
    public removeLevel(level: LogLevel): void {
        this.logLevel &= ~level;
    }
}
