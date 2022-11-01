export class ErrorHandler {
    static handleError(error) {
        switch (error.statusCode) {
            case 400: 
                this.handleBadRequest(error);
                break;
            case 401: 
                this.handleUnauthorized(error);
                break;
            case 404:
                this.handleNotFound(error);
                break;
            case 500:
                this.handleInternalServerError(error);
                break;
            default:
                this.handleDefault(error);
                break;
        }
        console.error(error);
    }

    static handleBadRequest(error) {
        toastr.error("Bad Request");
    }

    static handleUnauthorized(error) {
        toastr.error("Unauthorized");
    }

    static handleNotFound(error) {
        toastr.warning("Not Found");
    }

    static handleInternalServerError(error) {
        toastr.error("Internal Server Error");
    }

    static handleDefault(error) {
        toastr.info("Something went wrong...");
    }
}