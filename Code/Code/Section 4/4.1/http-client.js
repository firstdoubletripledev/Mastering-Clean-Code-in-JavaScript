import { ErrorHandler } from './error-handler';

export class HttpClient {
    get(url) {
        return fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                ErrorHandler.handle(response);
            }
        })
    }
}