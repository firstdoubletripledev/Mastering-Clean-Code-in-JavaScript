define("http-client", [], function HttpClient() {
    return {
        get: function(url) {
            return fetch(url).then(response => response.json());
        }
    }
});