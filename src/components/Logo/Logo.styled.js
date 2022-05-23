import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;


`;

export const Icon = styled.svg`
  width: 30px;
  height: 30px;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  transition: transform 250ms var(--cubic-bezier);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;


  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.5;
  }
`;
