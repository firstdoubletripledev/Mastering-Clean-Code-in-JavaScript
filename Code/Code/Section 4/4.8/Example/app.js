import {ErrorHandler} from './error-handler';
import { ConsoleLogHandler } from './console-log-handler';
import { ToastrHandler } from './toastr-handler';

function configureErrorHandler() {
    let errorHandler = new ErrorHandler(new ToastrHandler());
    return errorHandler;
}

let errorHandler = configureErrorHandler();
try {
    throw new Error("Dummy Error");
}
catch(err) {
    errorHandler.handle('Unknown Error', 'Oops, seems like something went wrong', err);
}