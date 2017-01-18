export enum LogLevel {
    NONE = 0,

    DEBUG = 1 << 0,
    INFO = 1 << 1,
    WARN = 1 << 2,
    ERROR = 1 << 3,

    ALL = DEBUG | INFO | WARN | ERROR
}
