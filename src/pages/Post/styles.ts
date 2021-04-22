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

  max-width: 560px;

  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);

  h1 {
    font-size: 0.8rem;
    font-weight: bold;
  }

  span {
    font-size: 0.8rem;
    margin: 0;
  }

  hr{
    background-color: black;
    margin: 0 0 10px 0;
  }

  div {
    font-size: 0.7rem;
    font-weight: bold;

    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      margin-right: 5px;
    }
  }
`;


