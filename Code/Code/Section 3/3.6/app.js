import { HttpClient } from './http-client';
import { PostManager } from './post-manager';

let postManager = new PostManager(new HttpClient());
postManager.printPosts();