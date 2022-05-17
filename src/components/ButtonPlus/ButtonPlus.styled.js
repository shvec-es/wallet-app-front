import styled from 'styled-components';

export const Button = styled.button`
  width: 44px;
  height: 44px;
  background: var(--color-secondary);
  border-color: transparent;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  filter: var(--drop-shadow-btn);

  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
