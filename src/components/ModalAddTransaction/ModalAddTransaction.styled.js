import styled from 'styled-components';
import sprite from 'images/sprite.svg';

export const ModalContainer = styled.div`
  width: 320px;
  height: 600px;
  padding: 20px 10px 35px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 540px;
    height: 510px;
    padding: 40px 70px;
    border-radius: 20px;
  }
`;

export const ModalBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
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
  justify-content: space-between;
  align-items: center;
  width: 220px;
  margin-bottom: 40px;
  margin-left: 60px;
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
  line-height: 27px;
  color: var(--color-gray);
  border: transparent;
  outline: none;
  border-bottom: 1px solid var(--color-gray-light);
  appearance: none;
  cursor: pointer;
  background: url('${sprite}#check') no-repeat right;
`;

export const ModalInput = styled.input`
  height: 32px;
  margin-top: 20px;
  margin-bottom: 20px;
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
`;

export const ModalButtonAdd = styled(ModalButton)`
  margin-bottom: 20px;
  background-color: var(--color-secondary);
  color: #ffffff;
  border: transparent;
  outline: none;
`;

export const ModalButtonCancel = styled(ModalButton)`
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
`;
