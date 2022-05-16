import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 320px;
  padding: 107px 20px;
  margin: 0;

  @media(min-width: 768px){

width: 533px;
height: 468px;

  }

  @media (min-width: 1280px) {
    width: 731px;
    display: flex;
    justify-content: center;
    padding: 120px 100px;
    background: var(--color-blur);
    backdrop-filter: blur(50px);
  }
`;

export const FormBg = styled.div`
 



  @media (min-width: 1280px) {

  }
`;

export const AppTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
    margin-bottom: 60px;
  @media (min-width: 1280px);
`;

export const AppTitle = styled.h1`
  margin: 0;
  margin-left: 20px;


  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;

  color: #000000;
  @media (min-width: 1280px);
`;

export const Form = styled.form`
  width: 280px;

  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

    @media(min-width: 768px){

width: 533px;
height: 468px;
 border-radius: 20px;

  }

  @media (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  width: 280px;
  height: 32px;
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-gray-light);

  @media (min-width: 1280px) {
    display: flex;
    width: 410px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-left: 50px;
  outline: 0;
  font-size: 18px;
  font-weight: bold;
  color: #212529;
  background-color: #fff;
  border: 0;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }

  @media (min-width: 1280px) {
    font-size: 26px;
    font-weight: bold;
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  bottom: 10px;
  left: 5px;
  padding-left: 10px;
  color: var(--color-gray-light);

  @media (min-width: 1280px) {
    top: 7px;
  }
`;

export const SignInBtn = styled.button`
  width: 280px;
  height: 50px;
  margin-top: 20px;

  background: var(--color-secondary);
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: transparent;
  cursor: pointer;

  color: #ffffff;

  @media (min-width: 1280px) {
    width: 300px;
    margin-top: 35px;
  }
`;

export const SignUpBtn = styled.div`
  width: 280px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: var(--color-primary);
  cursor: pointer;

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #ff0000;
`;
