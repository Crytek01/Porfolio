import { Link } from 'react-router-dom';
import { styledWithProps } from '@common/utils/styled-components/styled-components.util';
import { Construction, GitHub, HomeWork, LinkedIn } from '@mui/icons-material';
import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85rem;

  padding: ${({ theme: { spacing } }) => spacing[3]} 2rem;
`;

const LinkStyle = css`
  &:link,
  &:visited {
    text-decoration: none;
    color: #555;
    cursor: pointer;

    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #777;
    outline: none;

    box-shadow: 0 0 0 0.4rem rgba(0, 204, 255, 0.5);
  }

  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing[1]};

  padding: 1rem;
`;

export const RouterLink = styled(Link)`
  &::focus {
    outline: none;

    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }
  ${LinkStyle}
`;

export const ExternalLink = styled.a`
  ${LinkStyle}
`;

export const PorfolioName = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize[4]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};

  flex-basis: 20rem;

  @media (max-width: 22rem) {
    font-size: ${({ theme: { fontSize } }) => fontSize[3]};
  }

  @media (max-width: 19rem) {
    font-size: ${({ theme: { fontSize } }) => fontSize[2]};
  }
`;

export const NavBar = styled.nav``;

export const List = styled.ul`
  list-style: none;

  display: flex;

  align-items: center;
`;

export const Item = styled.li`
  font-size: ${({ theme: { fontSize } }) => fontSize[4]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};

  display: flex;
  gap: ${({ theme: { spacing } }) => spacing[1]};
`;

const iconSizeConfiguration = {
  sx: {
    fontSize: '1.8rem',
  },
};

export const GithubIcon = styledWithProps(GitHub, iconSizeConfiguration)``;

export const LinkedinIcon = styledWithProps(LinkedIn, iconSizeConfiguration)``;

export const WorksIcon = styledWithProps(Construction, iconSizeConfiguration)``;

export const CvIcon = styledWithProps(HomeWork, iconSizeConfiguration)``;
