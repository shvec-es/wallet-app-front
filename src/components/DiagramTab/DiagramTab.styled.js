import styled from 'styled-components';

export const TabTitle = styled.h1`
margin-top: 0px;
margin-bottom: 8px;

font-family: Poppins;
font-size: 30px;
font-weight: 400;
line-height: 1.5em;

 @media (min-width: 768px) {
margin-bottom: 20px;
  }
`

export const TabSection = styled.section`
max-width: 320px;
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(50px);

 @media (min-width: 768px) {
    width: 100%
  }
`