import * as toastr from 'toastr';

export class ErrorHandler {
    static handle(response) {
        if(response.status == 401) {
            toastr.error("You are not authorized to view this content");
        }
        else if (response.status == 404) {
            toastr.warning("Content not found");
        }
        else if(response.status == 500) {
            toastr.error("Internal server error");
        }
        else {
            toastr.info("Unknown error");
        }
    }
}