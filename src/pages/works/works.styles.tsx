import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardContainer } from '../../components/common/card/card.styles';

export const ArticleContainer = styled.article`
  padding: 4.8rem 0 9.6rem 0;
`;

export const SectionContainer = styled.section`
  &:not(:last-child) {
    margin: 4rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  margin-bottom: 4rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;

  margin-bottom: 2.2rem;
`;

export const GridContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;

  gap: 2rem;

  flex: 0 0 23rem;

  @media (max-width: 51.5em) {
    justify-content: center;
  }

  @media (max-width: 37em) {
    align-items: center;

    ${CardContainer} {
      flex-basis: 30rem;
    }
  }
`;

export const LinkWrapper = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: #555;
    cursor: pointer;

    transition: all 0.3s;
  }
`;
