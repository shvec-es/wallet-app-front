import styled from 'styled-components';

export const size = {
  mobile: '@media screen and (min-width: 320px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1280px)',
};

export const MainHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: var(--color-white);

  ${size.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};

  margin-left: 20px;

  font-family: 'Circle';
  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || 'var(--color-gray)'};

  ${size.tablet} {
    margin-left: 30px;
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 18px;
  color: ${props => props.color || 'var(--color-gray)'};
  background-color: transparent;
  border: none;
  padding-left: 12px;

  ${size.tablet} {
    border: none;
  }
`;

export const ExitIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: ${props => props.mRight || '8px'};
`;

export const UserName = styled.p`
  color: var(--color-gray);

  ${size.tablet} {
    padding: 0px 12px 6px 0;
    border-right: 1px solid;
  }
`;

export const Logout = styled.span`
  text-transform: capitalize;
`;
