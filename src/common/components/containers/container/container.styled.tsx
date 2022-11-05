import styled from 'styled-components';

export const Container = styled.div`
  max-width: 85rem;
  margin: 0 auto;

  padding: 0 ${({ theme: { spacing } }) => spacing[6]};
`;
