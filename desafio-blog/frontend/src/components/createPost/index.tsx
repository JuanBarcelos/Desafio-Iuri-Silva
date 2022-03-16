import { title } from 'process';
import { FormEvent, useCallback, useState } from 'react';
import { usePost } from '../../hooks/usePost';
import './index.css';

function CreatePost() {

   const {createPosts} = usePost();
   const [title,setTitle] = useState('');
   const [description,setDescription] = useState('');

const handlePostButton = useCallback(async () => {
   await createPosts({title: title, description: description})
}, [createPosts, title, description])


   return (
      <main>
            <div className="content-form">
               <form>
                  <label htmlFor="title">Titulo do Post</label>
                  <input type="text" name="title" id="title" value={title}
          onChange={(e) => setTitle(e.target.value)} />

                  <label htmlFor="post">Escrava seu Post</label>
                  <textarea name="post" id="post" value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>

                  <button type="submit" onClick={handlePostButton}>Publicar no Blog</button>
               </form>
            </div>
      </main>
   );
}

export default CreatePost;