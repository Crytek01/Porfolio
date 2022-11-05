import styled from 'styled-components';

export const SnackContainer = styled.button`
  border: none;
  border-radius: 10%;

  background-color: inherit;

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 1px #333;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  position: relative;
`;

export const SnackBarIcon = styled.svg``;
