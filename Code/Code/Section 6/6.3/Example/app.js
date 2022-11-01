import { ErrorHandler } from "./error-handler";
import { MessageHandlingStrategy } from "./message-handling-strategy";
import { ErrorLoggingStrategy } from "./error-logging-strategy";

const errorHandler = new ErrorHandler(MessageHandlingStrategy, ErrorLoggingStrategy);

window.onerror = function(message, source, lineNumber, colNumber, errorObject) {
    errorHandler.handle("Unknown Error", "Ooops! Something went wrong", 5, {
        message,
        source,
        lineNumber,
        colNumber,
        errorObject
    });
}

var myFunc = {};
myFunc();