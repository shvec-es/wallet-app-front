import styled from 'styled-components';

export const DateInput = styled.div`
  position: relative;
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

  &::placeholder {
    color: black;
  }
`;

export const DateIcon = styled.button`
  position: absolute;
  top: 18px;
  right: 15px;
  background: transparent;
  border: none;
  outline: none;
`;
