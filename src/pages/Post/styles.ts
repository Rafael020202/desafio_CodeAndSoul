import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const PostContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;

  max-width: 500px;

  h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
`;
