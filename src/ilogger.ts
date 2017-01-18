import { LogLevel } from "./loglevel";

export interface ILogger {
    debug(message: string, obj?: Object): void;
    debug(message: string): void;

    info(message: string, obj?: Object): void;
    info(message: string): void;

    warning(message: string, obj?: Object): void;
    warning(message: string): void;

    error(message: string, obj?: Object): void;
    error(message: string): void;

    addLevel(level: LogLevel): void;
    removeLevel(level: LogLevel): void;
}