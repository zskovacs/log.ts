import { LogLevel } from "./loglevel";
import { LogType } from "./logtype";

export interface LogOption {
    logType: LogType,
    logLevel: LogLevel
}