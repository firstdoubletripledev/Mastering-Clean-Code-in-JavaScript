define("post-manager", ["http-client"], function PostManager(httpClient) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return {
        printPosts: function() {
            httpClient.get(url).then(posts => {
                console.log("Posts: ", posts);
            })
        }
    }
})