import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 26px;
  right: 20px;
  z-index: 100;
`;

export const Select = styled.select`
  width: fit-content;
  height: fit-content;

  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: var(--color-primary);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
