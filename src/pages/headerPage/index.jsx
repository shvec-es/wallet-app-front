import styled from 'styled-components';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import icons from 'images/sprite.svg';

const accentTextColor = '#000000';
const textPHolderColor = '#bdbdbd';
const poppinsFont = 'Poppins, sans-serif';
const circleFont = 'Circe, Manrope, sans-serif';
const size = {
  mobile: '@media screen and (min-width: 320px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1280px)',
};



const StyledHeader = styled.div`
    background-color: white;
    display:flex ;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 15px 20px;
    ${size.tablet}{
    height: 80px; 
      padding: 20px 32px ;
    }
    ${size.desktop}{
      padding: 20px 16px ;   
    }
`

const Logo = styled(NavLink)`
  display: flex;
  cursor: pointer;
  justify-content: ${props => props.justify || 'center'} ;
  align-items: ${props=> props.align || 'center'};
`

const  Title =  styled.div`
  font-family: ${poppinsFont};
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.color || accentTextColor}; 

  ${size.tablet}{
    font-size: 30px;
    line-height: 1,5;
  }
`
const LogoIcon = styled.svg`
  width:30px ;
  height: 30px;
  margin-right: 15px;
  ${size.tablet}{
    width:40px ;
  height: 40px;
  margin-right: 20px;  
}
 `

const UserInfo = styled.div`
  display: flex ;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props=> props.align || 'center'};
  font-family: ${circleFont};
  font-size: 18px;
  line-height: 1,47;
  color: ${props => props.color || textPHolderColor};  
`
const LogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 18px;
  line-height: 1,47;
  color: ${props => props.color || textPHolderColor};
  background-color: transparent;
  border:none;
  padding-left: 12px;

  ${size.tablet}{
  border: none; 
}
`
const ExitIcon = styled.svg` 
  width: 18px;
  height: 18px;
  margin-right: ${props => props.mRight || '8px'}
`

const UserName = styled.p`
  color: ${textPHolderColor} ;
  ${size.tablet}
  {padding: 6px 12px 6px 0;
    border-right: 1px solid ${textPHolderColor};
  }
`
export default function HeaderPage() {
  
    const handleClick = () => {
  
    }
    
  return (
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
                  {/* <LogoutIcon /> */}
                  <ExitIcon> 
                    <use href={`${icons}#exit`}></use>
                  </ExitIcon>
                  <Media query="(min-width: 768px)" render={() =>
                    (<span>Logout</span>)}/>
              </LogoutBtn >
          </UserInfo>
          {/* {isModalLogoutOpen && <ModalLogout/>} */}
    </StyledHeader>
  )
} 

