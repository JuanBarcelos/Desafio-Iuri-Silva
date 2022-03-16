import { useCallback, useState } from "react"
import { IPost } from "../interface/IPost"
import { PostService } from "../services/postService";

export const usePost = () => {
    const [post, setPost] = useState<IPost[]>([]);
    const [onePost, setOnePost] = useState<IPost[]>([]);

    const findAll = useCallback(async () => {
        const {status, data} = await PostService.getOne();

        if (status !== 200) throw new Error();

        setPost(data);
    }, [])

    const createPosts = useCallback(async(post:Pick<IPost, 'title'| 'description'>) =>{
            const {status} = await PostService.createPosts(post);

            if(status !== 201) throw new Error();

            return alert('Post criado com sucesso...')
    },[])

    const findOne = useCallback(async (post:string) => {
            const {status, data} = await PostService.findOne(post);
            if (status !== 200) throw new Error();
            setPost(data);
    },[])

    return {
        findAll,
        createPosts,
        findOne,
        post,
        onePost
    }

}