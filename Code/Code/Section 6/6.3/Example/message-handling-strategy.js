import * as toastr from 'toastr';

export function MessageHandlingStrategy(header, content, severity) {
    if(severity <= 3) {
        toastr.warning(content, header);
    }
    else {
        toastr.error(content, header);
    }
}