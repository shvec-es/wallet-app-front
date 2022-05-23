import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  width: 280px;
  height: 50px;
  margin-bottom: 20px;
  background: var(--color-secondary);
  border-radius: var(--border-radius);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: transparent;
  color: var(--color-white);
  transition: background-color 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier);

  :hover {
    background-color: #03a682;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ButtonLink = styled(NavLink)`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  transition: background-color 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier);
  &:hover {
    background: var(--color-primary-light);
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  padding-left: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-gray-light);
  outline: none;
`;
export const Label = styled.label`
  display: block;
  position: relative;
  width: 280px;
  height: 32px;
  color: var(--color-gray);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 409.5px;
    height: 32px;
  }
`;

export const Icon = styled('svg')`
  display: block;
  position: absolute;
  left: 10px;
  top: 4px;
`;
export const Wrap = styled('div')`
  margin-bottom: 60px;
  position: relative;
`;
export const Form = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  box-sizing: border-box;
  max-width: 320px;

  padding: 32px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 533px;

    border-radius: var(--border-radius);
    padding: 40px 60px 46px 65px;
    margin-left: auto;
    margin-right: auto;
  } ;
`;

export const ErrMessage = styled('div')`
  font-size: 13px;
  color: var(--color-tertiary);
`;
export const WrapperPage = styled.div`
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  margin: 0 auto;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
  }
`;
export const WrapperForm = styled.div`
  @media screen and (min-width: 1280px) {
    min-width: 731px;
    padding: 52px 91px 52px 107px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
  }
`;

export const Switcher = styled.div`
  position: absolute;
  right: -70px;
  top: -20px;

  @media screen and (min-width: 768px) {
    right: -140px;
  }
`;
