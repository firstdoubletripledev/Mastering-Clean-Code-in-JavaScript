import * as Bottle from 'bottlejs';
import {HttpClient} from './http-client';
import {PostsManager} from './posts-manager';

var bottle = new Bottle();
bottle.service("HttpClient", HttpClient);
bottle.service("PostsManager", PostsManager, 'HttpClient');

let postsManager = bottle.container.PostsManager;
postsManager.getPosts().then(posts => console.log("Posts: ", posts));
postsManager.getComments().then(comments => console.log("Comments: ", comments));