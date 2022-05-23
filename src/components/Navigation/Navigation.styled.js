import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: column;

    & a {
      font-size: 18px;
      line-height: 1.5;
      display: flex;
      align-items: center;
    }

    & a:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;

  &.active {
    font-weight: bold;
  }

  &.active svg,
  &:hover {
    color: var(--color-primary);
    filter: var(--drop-shadow);
  }
`;

export const StyledSvg = styled.svg`
  width: 44px;
  height: 44px;
  color: var(--color-primary-light);

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  } ;
`;

export const NavItemTitle = styled.span`
  display: none;

  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 18px;
  text-transform: capitalize;

  @media (min-width: 768px) {
    display: block;
  } ;
`;
