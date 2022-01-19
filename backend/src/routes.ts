import { Router } from "express";
import { FindAllController, GetPostController, PostController } from "./controller/postController";


const routes = Router();

routes.post('/posts',new PostController().handle);
routes.get('/posts/:title',new GetPostController().handle);
routes.get('/posts', new FindAllController().handle);

export {routes}