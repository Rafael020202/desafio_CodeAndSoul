import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

import { Container, PostContainer } from './styles';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostView: React.FC = () => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();
  const { id } = useParams<any>();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data as Post[];
      const postFind = posts.find(post => post.id === Number(id));

      setPost(postFind);
      setLoading(false);
    });
  }, []);

  return(
    <Container>
      {
        loading ? <Spinner animation='border' variant='dark'/> :
        <PostContainer>
          <h1>#{post?.id} {post?.title}</h1>
          <span>User: {post?.userId}</span>
          <hr/>
          <p>{post?.body}</p>

          <div onClick={() => history.goBack()}><FiArrowLeft/> Voltar</div>
        </PostContainer>
      }
    </Container>
  );
}

export default PostView;