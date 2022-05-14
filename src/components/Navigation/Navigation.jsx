import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Icon from './NavigationIcons';
import Media from 'react-media';
import styled from 'styled-components';

// export const StyledNav = styled.nav`
//   display: flex;
//   justify-content: space-between;

//   &:hover {
//     color: orange;
//     fill: yellow;
//   }
// `;

export default function Navigation() {
  return (
    <nav className={s.mainNavigation}>
      <NavLink
        to="/home"
        className={navData => (navData.isActive ? s.active : '')}
      >
        <Icon name="home" />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/diagram"
        className={navData => (navData.isActive ? s.active : '')}
      >
        <Icon name="timeline" />
        <span>Statistics</span>
      </NavLink>

      <Media
        query="(max-width: 768px)"
        render={() => (
          <>
            <NavLink
              to="/currency"
              className={navData => (navData.isActive ? s.active : '')}
            >
              <Icon name="finance" />
              <span>Currency</span>
            </NavLink>
          </>
        )}
      />
    </nav>
  );
}
