import styled, { css } from 'styled-components';

export const Article = styled.article`
  padding: 4.8rem 0 9.6rem 0;
  margin: 0 auto;
  max-width: 50rem;
`;

export const ImageContainer = styled.picture`
  display: flex;
  justify-content: center;
  width: clamp(15rem, 100%, 50rem);
  height: auto;

  margin-bottom: 2.4rem;
`;

const imageDefaultStyles = css`
  border-radius: 11px;
  width: 100%;
  height: 100%;
`;

export const LogoImage = styled.img`
  ${imageDefaultStyles}
`;

export const PreviewImage = styled.img`
  ${imageDefaultStyles}
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;

  margin-bottom: 4rem;
  text-align: justify;
`;

export const KeyPointsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  margin-bottom: 4rem;
`;

export const KeyPoint = styled.li`
  list-style: none;

  display: flex;

  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 27rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;

export const Point = styled.p`
  font-size: 1.4rem;
`;

export const ExternalLink = styled.a`
  &:visited,
  &:link {
    font-size: 1.4rem;
    color: #6e9cf8;

    text-decoration: none;
    cursor: pointer;
  }

  &:hover,
  &:active {
    color: #487be0;
  }
`;

export const PreviewTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;

  color: #444;

  display: inline-block;

  margin-bottom: 2rem;
`;
