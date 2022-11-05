import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 11px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex: 0 1 24rem;

  width: 24rem;
  min-height: 28rem;

  transition: transform 0.4s ease;

  box-shadow: 0 0rem 1rem rgb(0 0 0 / 3.5%);

  &:hover {
    transform: scale3d(1.03, 1.03, 1.03);
    box-shadow: 0 0.8rem 4.8rem rgb(0 0 0 / 3%);
  }

  &:active {
    box-shadow: 0 0.8rem 4.8rem rgb(0 0 0 / 10%);
  }
`;

export const CardImage = styled.img`
  border-radius: 11px;

  margin-bottom: 1.2rem;

  width: 100%;
  height: 13.6rem;

  background-size: cover;

  opacity: 95%;
`;

export const TextContainer = styled.div`
  padding: 1rem 2rem;
`;

// export const CardTitle = styled.p`
//   font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
//   font-size: ${({ theme: { fontSize } }) => fontSize[6]};
//   margin-bottom: 1rem;

//   text-align: center;
// `;

// export const CardInformation = styled.p`
//   font-size: ${({ theme: { fontSize } }) => fontSize[2]};
//   line-height: 1.8;

//   color: #555;

//   text-align: center;
// `;
