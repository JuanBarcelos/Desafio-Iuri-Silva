import { Request, Response } from "express";
import { CreatePostService, FindAll, GetOnePostService } from "../services/postService";

export class PostController{
    async handle(request:Request, response:Response){
        const {title,description}= request.body;
        const service = new CreatePostService();
        const result = await service.execute({
            title,description
        });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}

export class GetPostController{
    async handle(request: Request, response: Response){
        const {title} = request.params;

        const service = new GetOnePostService();

        const post = await service.execute(title);

        if (post instanceof Error) {
            return response.status(400).json(post.message);
        }

        return response.json(post);

    }
}

export class FindAllController{
    async handle(request: Request, response: Response, next) {
        const service = new FindAll();

        const post = await service.execute();

        return response.json(post);
    }
}