import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -100;
  // filter: blur(50px);  
  background-color: var(--color-background);
`;

export const TopEllipse = styled.svg`

  position: absolute;
  top: 0;
  right: 0;
  width: 368px;
  height: 383px;
  color: var(--color-ellipse-top);

  @media (min-width: 1280px) {
    width: 552px;
    height: 383px;
  }
`;

export const BottomEllipse = styled.svg`

position: absolute;
  bottom: 0;
  left: 0;
  width: 496px;
  height: 322px;
  color: var(--color-ellipse-bottom);

  `;
