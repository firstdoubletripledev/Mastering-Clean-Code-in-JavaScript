import { POSTS_ENDPOINT } from './config';

export class PostManager {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    printPosts() {
        this.httpClient.get(POSTS_ENDPOINT).then(posts => {
            console.log("Posts: ", posts);
        })
    }
}