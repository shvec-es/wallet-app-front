import React, { useState } from 'react';
import Media from 'react-media';
import icons from 'images/sprite.svg';
import { Logo, ModalWindow, LogoutContent, Container } from 'components';
import { useTranslation } from 'react-i18next';
import {
  StyledHeader,
  UserInfo,
  LogoutBtn,
  ExitIcon,
  UserName,
  Logout,
} from './Header.styled';

const Header = () => {
  const { t } = useTranslation();
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  return (
    // <MainHeader>
    <StyledHeader>
      <Logo />

      <UserInfo>
        <UserName>{'user' || 'User'} </UserName>
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
      </StyledHeader>

    // </MainHeader>
  );
};

export default Header;
