import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        setPost(response.data);

        console.log(posts)
      });

  }, [posts]);

  return(
    <>
      <ul>
        {posts.map(post =>( 
            <li key={post.id}>{post.title}</li>
          )
        )}
      </ul>
    </>
  );

}

export default Posts;