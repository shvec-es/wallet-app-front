import React, { Fragment } from 'react';
import Icon from './NavigationIcons';
import Media from 'react-media';
import { MainNav, StyledLink, NavItemTitle } from './Navigation.styled';

export default function Navigation() {
  return (
    <MainNav>
      <StyledLink to="/home">
        <Icon name="home" />
        <NavItemTitle>Home</NavItemTitle>
      </StyledLink>
      <StyledLink to="/diagram">
        <Icon name="timeline" />
        <NavItemTitle>Statistics</NavItemTitle>
      </StyledLink>

      <Media
        query="(max-width: 768px)"
        render={() => (
          <>
            <StyledLink to="/currency">
              <Icon name="finance" />
            </StyledLink>
          </>
        )}
      />
    </MainNav>
  );
}
