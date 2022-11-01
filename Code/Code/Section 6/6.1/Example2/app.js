window.onerror = function(message, source, lineNumber, colNumber, errorObject) {
    console.log("Error Details:");
    console.log(`Message: ${message}`);
    console.log(`Source: ${source}`);
    console.log(`Line number: ${lineNumber}`);
    console.log(`Col number: ${colNumber}`);
    console.log("Error Object: ", errorObject);
}

var func = {};
func();