class HttpClient {
    get(url) {
        return fetch(url).then(response => response.json());
    }
}

class PostsService {
    constructor() {
        this.value = 7;
    }

    configure(config) {
        this.configureHttpClient(config);
        this.configureEndpoints(config);
    }

    configureHttpClient(config) {
        if(!config.httpClient) {
            throw new Error("HttpClient not configured");
        }
        this.httpClient = config.httpClient;
    }

    configureEndpoints(config) {
        if(!config.endpoints || !config.endpoints.posts || !config.endpoints.comments) {
            throw new Error("Endpoints poorly configured");
        }
        this.postsEndpoints = config.endpoints.posts;
        this.commentsEndpoints = config.endpoints.comments;
    }

    getPosts() {
        return this.httpClient.get(this.postsEndpoints);
    }

    getComments() {
        return this.httpClient.get(this.commentsEndpoints);
    }
}

class PostsServiceFactory {
    prepareInstance() {
        let config = {
            httpClient: new HttpClient(),
            endpoints: {
                posts: "http://jsonplaceholder.typicode.com/posts",
                comments: "http://jsonplaceholder.typicode.com/comments"
            }
        }
        this.postsService = new PostsService();
        this.postsService.configure(config);
    }

    getInstance() {
        if(!this.postsService) {
            this.prepareInstance();
        }
        return this.postsService;
    }
}

let postsServiceFactory = new PostsServiceFactory();
let postsService = postsServiceFactory.getInstance();
postsService.value += 5; //12

function testSingleton(postsServiceFactory) {
    let newPostsService = postsServiceFactory.getInstance();
    newPostsService.value += 5;
    console.log(newPostsService.value); //Expected: 17 not 12
}

testSingleton(postsServiceFactory);

// postsService.getPosts().then(posts => console.log("Posts: ", posts));
// postsService.getComments().then(comments => console.log("Comments: ", comments));