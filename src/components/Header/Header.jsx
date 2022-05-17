import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import icons from 'images/sprite.svg';
import {
    MainHeader,
    StyledHeader,
    Logo,
    Title,
    LogoIcon,
    UserInfo,
    LogoutBtn,
    ExitIcon,
    UserName,
} from './Header.styled'

const Header = () => {
  
    const handleClick = () => {
  
    }
    
  return (
      <MainHeader>
      <StyledHeader >
          <Logo to="/">
              <LogoIcon>
              <use href={`${icons}#wallet`}></use>
              </LogoIcon>
            
              <Title>Wallet</Title>
          </Logo>
          <UserInfo>
              <UserName>{'user' || 'User'} </UserName> 
              <LogoutBtn type='button' onClick={handleClick}>
                  <ExitIcon> 
                    <use href={`${icons}#exit`}></use>
                  </ExitIcon>
                  <Media query="(min-width: 768px)" render={() =>
                    (<span>Logout</span>)}/>
              </LogoutBtn >
          </UserInfo>
          {/* {isModalLogoutOpen && <ModalLogout/>} */}
    </StyledHeader>
    </MainHeader>
  )
} 

export default Header;
