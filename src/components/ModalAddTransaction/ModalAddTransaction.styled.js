import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 320px;
  max-height: 700px;
  padding: 20px 20px 35px;
  background-color: #ffffff;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 540px;
    max-height: 600px;
    padding: 40px 70px;
    border-radius: 20px;
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;

  font-family: 'Poppins';
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const CheckboxText = styled.span`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-gray-light);
`;

export const CheckboxTextPlus = styled(CheckboxText)`
  color: var(--color-secondary);
`;

export const CheckboxTextMinus = styled(CheckboxText)`
  color: var(--color-tertiary);
`;

export const ModalSelect = styled.select`
  height: 32px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  outline: none;
  border-bottom: 1px solid var(--color-gray-light);
  appearance: none;
  cursor: pointer;

  &::placeholder {
    color: var(--color-gray-light);
  }
`;

export const ModalInputWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ModalInput = styled.input`
  height: 32px;
  width: 280px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  outline: none;
  border-bottom: 1px solid var(--color-gray-light);
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 185px;
  }
`;

export const DateInput = styled.div`
  position: relative;
`;

export const DateIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  outline: none;
`;

export const ModalInputComment = styled.textarea`
  height: 84px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  border-bottom: 1px solid var(--color-gray-light);
  outline: none;
  resize: none;

  @media (min-width: 768px) {
    height: 32px;
  }
`;

const ModalButton = styled.button`
  height: 50px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 20px;
  cursor: pointer;
`;

export const ModalButtonAdd = styled(ModalButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: transparent;
  outline: none;

  transition: transform 250ms linear;

  @media (min-width: 768px) {
    margin: 20px auto;
    width: 300px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ModalButtonCancel = styled(ModalButton)`
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);

  transition: transform 250ms linear;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 300px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ErrorMesage = styled.p`
  margin-top: -10px;
  padding: 0;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 10px;
  color: var(--color-error);

  @media (min-width: 768px) {
    margin: 0;
  }
`;
