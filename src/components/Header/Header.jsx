import Media from 'react-media';
import icons from 'images/sprite.svg';
import { Logo} from 'components';
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

  const handleClick = () => {};

  return (
    // <MainHeader>
    <StyledHeader>
      <Logo />

      <UserInfo>
        <UserName>{'user' || 'User'} </UserName>
        <LogoutBtn type="button" onClick={handleClick}>
          <ExitIcon>
            <use href={`${icons}#exit`}></use>
          </ExitIcon>
          <Media
            query="(min-width: 768px)"
            render={() => <Logout>{t('logout')}</Logout>}
          />
        </LogoutBtn>
      </UserInfo>
      {/* {isModalLogoutOpen && <ModalLogout/>} */}
    </StyledHeader>
    // </MainHeader>
  );
};

export default Header;
