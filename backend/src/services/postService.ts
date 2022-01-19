import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

type PostRequest = {
title:string;
description:string;
}

export class CreatePostService{
    async execute({title,description}:PostRequest):Promise<Post | Error>{
        const repo = getRepository(Post);

        if(await repo.findOne({title})){
            return new Error("Title already exists");
        }

        const post = repo.create({
            title,
            description
        });

        await repo.save(post);

        return post;
    }
}

export class GetOnePostService{
    async execute(title:string){
        const repo = getRepository(Post);

        if (!(await repo.find(
            { where: { title: title} }
        )))
         {
            return new Error("Title does not exist");
        }
        
        const post = await repo.find(
            { where: { title: title} }
        );

        return post
    }
}

export class FindAll{
    async execute() {
        const repo = getRepository(Post);

        const post = await repo.find();

        return post;
    }
}