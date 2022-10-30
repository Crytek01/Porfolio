import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 11px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex: 0 1 24rem;

  width: 24rem;
  height: 30rem;

  //Animations
  transition: transform 0.4s ease;

  &:hover {
    transform: scale3d(1.03, 1.03, 1.03);
    box-shadow: 0 0.8rem 4.8rem rgb(0 0 0 / 3%);
  }
`;

export const CardImage = styled.img`
  border-radius: 11px;

  margin-bottom: 1.2rem;

  width: 100%;
  height: 13.6rem;

  background-size: cover;
`;

export const TextContainer = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  margin-bottom: 1rem;

  text-align: center;
`;

export const CardInformation = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8;

  color: #555;

  text-align: center;
`;
