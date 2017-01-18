# Logger library for Typescript
[![Build Status](https://travis-ci.org/zskovacs/log.ts.svg?branch=master)](https://travis-ci.org/zskovacs/log.ts)

## Example
**Simple console logger**

It logs everything in console

```typescript
import * as LogFactory from "../src/loggerfactory";

//This will only logs ERRORS!!
var options: LogFactory.LogOption = {
    logLevel: LogFactory.LogLevel.ERROR,
    logType: LogFactory.LogType.CONSOLE,
}

var logger = LogFactory.build(options);

//This will not show the log, because the level is set to ERROR
logger.debug("Testing debug...", { name: "Object name" });

//This will show an error log in console
logger.error("Testing error...");
```

**Add multiple logger**

You can add multiple logger. For example if you want to log every debug message to console but not to local storage.

```typescript
var options: Array<LogFactory.LogOption> = [{
    logLevel: LogFactory.LogLevel.ALL,
    logType: LogFactory.LogType.CONSOLE,
},{
    logLevel: LogFactory.LogLevel.ERROR | LogFactory.LogLevel.WARN,
    logType: LogFactory.LogType.LOCALSTORAGE,
}];

var logger = LogFactory.build(options);

//This will only log to CONSOLE
logger.debug("Testing debug...", { name: "Object name" });

//This will log to CONSOLE and LOCALSTORAGE
logger.error("Testing error...");
```

**Remove logger**

You can remove the logger if you use NULL

```typescript
import * as LogFactory from "../src/loggerfactory";

var options: LogFactory.LogOption = {
    logLevel: LogFactory.LogLevel.ALL,
    logType: LogFactory.LogType.NULL,
}

var logger = LogFactory.build(options);
```

**Changing log level**

!!USE CAUTION!! If you use multiple logger, this will change all of the loggers level

```typescript
//These will add INFO and WARN but remove ERROR from the log
logger.addLevel(LogFactory.LogLevel.INFO);
logger.addLevel(LogFactory.LogLevel.WARN);
logger.removeLevel(LogFactory.LogLevel.ERROR);

//OK
logger.info("Testing info...");
//OK
logger.warning("Testing warn...");
//NOK
logger.error("Testing error...");
```
