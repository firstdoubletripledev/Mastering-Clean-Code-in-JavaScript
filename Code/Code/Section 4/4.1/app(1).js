import {ErrorHandler} from './error-handler';

let httpError = {
    statusCode: 404
}

ErrorHandler.handleError(httpError);