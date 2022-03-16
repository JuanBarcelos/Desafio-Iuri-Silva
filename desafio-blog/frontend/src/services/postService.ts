import { IPost } from "../interface/IPost";
import { api } from "../providers"

const getOne = () => api.get<IPost[]>(`/posts`);

const findOne = (post:string) => api.get<IPost[]>(`/posts/${post}`);

const createPosts = (post:Pick<IPost, 'title'| 'description'>) => api.post('/posts',post);

export const PostService = { getOne,createPosts, findOne}