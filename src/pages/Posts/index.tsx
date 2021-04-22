import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';


import { Card, Container } from './styles';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        setPost(response.data);
        setLoading(false);
      });
  }, []);

  return(
    <>
      <Container isLoading={loading}>
        <h1>Posts</h1>
        {
          loading ? <Spinner animation='border' variant='dark'/> :
          <ul>
            {
              posts.map(post =>( 
              <Card key={post.id} onClick={() => history.push(`/post/${post.id}`)}>{post.title}</Card>
              )
            )}

          </ul>
        }
      </Container>
    </>
  );

}

export default Posts;