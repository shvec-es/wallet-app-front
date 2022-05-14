import styled from 'styled-components';

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
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;
