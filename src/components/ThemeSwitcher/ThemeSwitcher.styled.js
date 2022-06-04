import styled from 'styled-components';

export const Switcher = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
