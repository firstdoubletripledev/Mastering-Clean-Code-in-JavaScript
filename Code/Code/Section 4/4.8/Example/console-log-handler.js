export class ConsoleLogHandler {
    handle(errorTitle, errorBody) {
        console.error(errorTitle);
        console.log(errorBody);
    }
}