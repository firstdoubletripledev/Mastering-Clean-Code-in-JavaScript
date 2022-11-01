export class ErrorHandler {
    constructor(messageHandler, logger) {
        if(!messageHandler) {
            throw new Error("Message handler not defined");
        }
        if(!logger) {
            throw new Error("Logger not defined");
        }
        this.messageHandler = messageHandler;
        this.logger = logger;
    }

    handle(header, content, severity, errorObject) {
        this.messageHandler(header, content, severity);
        this.logger(errorObject);
    }
}