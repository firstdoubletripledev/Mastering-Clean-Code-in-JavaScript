export class HttpClient {
    get(url) {
        fetch(url).then(response => response.json()).catch(err => {
            console.error(err);
        })       
    }
}