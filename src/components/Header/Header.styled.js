import styled from 'styled-components';

export const size = {
  mobile: '@media screen and (min-width: 320px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1280px)',
};

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 15px 20px;

  ${size.tablet} {
    height: 80px;
    width: 768px;
    padding: 20px 32px;
  }

  ${size.desktop} {
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  font-famile: Circle;

  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || 'var(--color-gray)'};
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
