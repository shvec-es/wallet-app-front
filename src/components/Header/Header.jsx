import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-media';

import icons from 'images/sprite.svg';
import { getUserName } from 'redux/auth/auth-selectors';
import {
  Logo,
  ModalWindow,
  LogoutContent,
  Container,
  LanguageSwitcher,
} from 'components';
import { useTranslation } from 'react-i18next';
import {
  MainHeader,
  HeaderWrapper,
  UserInfo,
  LogoutBtn,
  ExitIcon,
  UserName,
  Logout,
} from './Header.styled';

const Header = () => {
  const { t } = useTranslation();
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);
  const userName = useSelector(getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);
  
  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <Logo />

          <LanguageSwitcher />

          <UserInfo>
            <UserName>{name || 'User'} </UserName>
            <LogoutBtn
              type="button"
              onClick={() => {
                setModalLogoutOpen(true);
              }}
            >
              <ExitIcon>
                <use href={`${icons}#exit`}></use>
              </ExitIcon>
              <Media
                query="(min-width: 768px)"
                render={() => <Logout>{t('logout')}</Logout>}
              />
            </LogoutBtn>
          </UserInfo>
          {modalLogoutOpen && (
            <ModalWindow closeModal={setModalLogoutOpen}>
              <LogoutContent setOpenModal={setModalLogoutOpen} />
            </ModalWindow>
          )}
        </HeaderWrapper>
      </Container>
    </MainHeader>
  );
};

export default Header;
