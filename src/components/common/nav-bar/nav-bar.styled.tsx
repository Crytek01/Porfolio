import { Construction, GitHub, HomeWork, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85rem;

  padding: 1.2rem 2rem;
`;

const LinkStyle = css`
  display: inline-block;

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
  gap: 0.4rem;

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
  font-size: 1.8rem;
  font-weight: 600;

  flex-basis: 20rem;

  @media (max-width: 22rem) {
    font-size: 1.4rem;
  }
`;

export const NavBar = styled.nav``;

export const List = styled.ul`
  list-style: none;

  display: flex;

  align-items: center;
`;

export const Item = styled.li`
  font-size: 1.8rem;
  font-weight: 500;

  display: flex;
  gap: 0.4rem;
`;

const iconSizeConfiguration = {
  sx: {
    fontSize: '1.8rem',
  },
};

export const GithubIcon = styled(GitHub).attrs(iconSizeConfiguration)``;

export const LinkedinIcon = styled(LinkedIn).attrs(iconSizeConfiguration)``;

export const WorksIcon = styled(Construction).attrs(iconSizeConfiguration)``;

export const CvIcon = styled(HomeWork).attrs(iconSizeConfiguration)``;

export const SnackContainer = styled.button`
  border: none;
  border-radius: 10%;

  background-color: inherit;

  &:hover {
    background-color: #fcfaf8;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  position: relative;
`;

export const SnackBarIcon = styled.svg``;
