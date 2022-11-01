import {HttpClient} from './http-client';

let http = new HttpClient();

http.get("https://httpstat.us/404").then(data => {
    console.log(data);
})