import styled from 'styled-components';

export const ChartWrapper = styled.div`
position: relative;
max-width: 280px;
height: 280px;
margin-bottom: 32px;

@media (min-width: 768px) {
width: 336px;
height: 336px;
  }

  @media (min-width: 1280px) {
width: 288px;
height: 288px;
  }
`

export const Total = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

font-family: Circe;
font-size: 18px;
font-weight: 700;
line-height: 27px;
`