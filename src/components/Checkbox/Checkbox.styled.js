import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  background: transparent;
  border-radius: 30px;
  border: 1px solid var(--color-gray-light);
  position: relative;
  transition: background-color 250ms linear;
`;

export const CheckboxButton = styled.div`
  content: '';
  position: absolute;
  top: -2px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 250ms;

  filter: var(--drop-shadow-btn);
`;

export const CheckboxButtonPlus = styled(CheckboxButton)`
  left: -2px;
  background: var(--color-secondary);
`;

export const CheckboxButtonMinus = styled(CheckboxButton)`
  right: -2px;
  background: var(--color-tertiary);
  color: var(--color-white);
`;
