import styled, { css } from 'styled-components';

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  font-size: 0.65rem;
  font-weight: bold;

  ${props => props.isLoading && css`
    justify-content: center;
  `}
`;

interface CardProps {
  onClick?: any;
  key: number;
}

export const Card = styled.li<CardProps>`
  background-color: white;
  display: flex;
  margin-bottom: 10px;
  list-style: none;

  align-items: center;
  justify-content: center;

  padding: 10px;

  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;
