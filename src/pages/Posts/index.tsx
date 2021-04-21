import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Card, Container} from './styles';

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
      <Container>
        <ul>
          {posts.map(post =>( 
              <Card key={post.id}>{post.title}</Card>
            )
          )}
        </ul>
      </Container>
    </>
  );

}

export default Posts;