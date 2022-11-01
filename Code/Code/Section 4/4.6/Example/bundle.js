/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);