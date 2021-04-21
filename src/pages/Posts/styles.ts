import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Card = styled.li`
  background-color: white;
  display: flex;
  height: 50px;
  margin-bottom: 10px;
  list-style: none;

  align-items: center;
  justify-content: center;

  padding: 5px;

  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;