import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, PostContainer } from './styles';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const { id } = useParams<any>();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data as Post[];
      const postFind = posts.find(post => post.id === Number(id));

      setPost(postFind);
    });
  }, []);

  return(
    <Container>
      <PostContainer>
        <h1>#{post?.id} {post?.title}</h1>
        <p>{post?.body}</p>
      </PostContainer>
    </Container>
  );
}

export default Post;