import React, { Fragment } from 'react';
import Icon from './NavigationIcons';
import Media from 'react-media';
import { MainNav, StyledLink, NavItemTitle } from './Navigation.styled';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <MainNav>
      <StyledLink to="home">
        <Icon name="home" />
        <NavItemTitle>{t('home')}</NavItemTitle>
      </StyledLink>
      <StyledLink to="diagram">
        <Icon name="timeline" />
        <NavItemTitle>{t('statistic')}</NavItemTitle>
      </StyledLink>

      <Media
        query="(max-width: 768px)"
        render={() => (
          <>
            <StyledLink to="currency">
              <Icon name="finance" />
            </StyledLink>
          </>
        )}
      />
    </MainNav>
  );
}
