import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  width: 280px;
  height: 50px;
  padding: 13px 20px;
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  display: block;
  cursor: pointer;
  background: #fff;
  margin-bottom: 20px;
  :hover {
    color: #fff;
    background: var(--color-secondary);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 50px;
    margin-left: 59px;
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

  @media screen and (min-width: 768px) {
    width: 409.5px;
    height: 32px;
  }
`;
export const Label = styled.label`
  display: block;
  position: relative;
  width: 280px;
  height: 32px;
  color: var(--color-gray);
  margin-bottom: 40px;
`;

export const Icon = styled('svg')`
  display: block;
  position: absolute;
  left: 10px;
  top: 4px;
`;
export const Wrap = styled('div')`
  display: flex;
  width: 120px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 0 80px 60px 80px;

  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
    margin: 0 116px 60px 101px;
    justify-content: start;
  }
`;
export const Form = styled('div')`
  background: #fff;
  box-sizing: border-box;
  width: 320px;
  height: 568px;
  padding: 32px 20px 36px 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    border-radius: 20px;
    padding: 40px 60px 66px 65px;
  } ;
`;
export const Title = styled('h1')`
  display: block;
  font-family: 'Poppins';
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 16px;
  }
`;
export const ErrMessage = styled('div')`
  font-size: 11px;
  color: red;
`;
export const ButtonLink = styled(Button)`
  margin-bottom: 0;
`;
export const WrapperPage = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
  }
`;
export const WrapperForm = styled.div`
  @media screen and (min-width: 1280px) {
    min-width: 731px;
    min-height: 720px;
    padding: 22px 91px 22px 61px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
  }
`;
