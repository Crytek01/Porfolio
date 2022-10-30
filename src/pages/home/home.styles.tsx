import styled, { css } from 'styled-components';

const defaultTextCSS = css`
  font-size: 1.6rem;
  line-height: 1.6;

  @media (max-width: 33em) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

export const ArticleContainer = styled.article`
  padding: 4.8rem 0 9.6rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  margin-bottom: 1.6rem;

  @media (max-width: 33em) {
    font-size: 2.4rem;
  }
`;

export const DeveloperRoles = styled.span`
  display: block;

  font-size: 1.6rem;
  font-weight: 400;

  margin-bottom: 4rem;

  @media (max-width: 33em) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

export const SectionContainer = styled.section`
  &:not(:last-child) {
    margin: 4rem 0;
  }
`;

export const SectionTitle = styled.h2`
  display: inline-block;

  font-size: 2.4rem;
  font-weight: 600;

  border-bottom: 2px solid #777;

  margin-bottom: 2rem;

  @media (max-width: 33em) {
    font-size: 2rem;
  }
`;

export const SectionText = styled.p`
  ${defaultTextCSS}
`;

export const BiographyTextContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BiographyList = styled.ul`
  display: flex;

  flex-direction: column;

  justify-content: center;
`;

export const BiographyItem = styled.li`
  display: flex;
  align-items: flex-start;

  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BiographyBoldText = styled.span`
  ${defaultTextCSS}

  display: block;

  align-self: flex-start;

  font-weight: 700;
  font-size: 1.4rem;
  margin-right: 1.4rem;
`;

export const BiographyText = styled.p`
  ${defaultTextCSS}
`;

export const ArchivementText = styled.p`
  ${defaultTextCSS}

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
