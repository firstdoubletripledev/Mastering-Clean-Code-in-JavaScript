var axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    console.log("First post: ", response.data[0]);
});