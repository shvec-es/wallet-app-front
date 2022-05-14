import styled from 'styled-components';

export const Table = styled.table`
min-width: 280px;
  min-height: 174px;
  border-collapse: collapse;
  border-spacing: 0;

  font-family: 'Circe';
  font-style: normal;
  color: #000000;
  background-color: blue;


  @media (min-width: 768px) {
    min-width: 336px;
    min-height: 182px;
  }

  @media (min-width: 1280px) {
    min-width: 393px;
  }
`
export const TableHeader = styled.thead`
width: 280px;
// display: inline-block;
border-radius: 30px;

background-color: #FFFFFF;

`;

export const HeadCell = styled.th`
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
font-weight: 700;
line-height: 1.5em;
text-transform: capitalize;

&:first-child {
    padding-left: 20px;
    text-align: left;
}

&:last-child {
    padding-rigth: 20px;
    // text-align: end;
}

  @media (min-width: 1280px) {
    padding: 18px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableData = styled.td`

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  vertical-align: sub;

`;

export const ColorMark = styled.span`
display: inline-block;
width: 24px;
height: 24px;
background-color: ${props => props.markColor};
border-radius: 2px;
margin-right: 14px;
` 
