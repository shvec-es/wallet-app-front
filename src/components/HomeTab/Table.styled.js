import styled from 'styled-components';

export const TableMain = styled.table`
    width: 688px;
    max-height: 60vh;
    @media screen and (min-width: 1280px) {
        width: 715px;
      }
`
export const TableHeader = styled.thead`
    display: block;
    padding: 7px 20px;
    font-size: 18px;
    font-weight: 700;
    background-color: var(--color-white);
    border-radius: 30px;
`
export const TableBody = styled.tbody`
    display: block;
    padding: 0px 20px 15px 20px;
    font-size: 16px;
`

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0;
    &:not(:last-child) {
        border-bottom: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
`
export const TableHeadCell = styled.th`
  font-weight: 700;`

export const TableCell = styled.td`
  text-align: center;
  line-height: normal;
  &:first-child {
    width: 70px;
    text-align: start;
  }
&:nth-child(2) {
  width: 40px;
  margin-right: 20px; 
  }
&:nth-child(3) {
    width: 120px;
    text-align: start;
  }
&:nth-child(4) {
    width: 120px;
    text-align: start;
  }
&:last-child {
    width: 100px;
    text-align: end;
  }
`
export const TableCellColor = styled.td`
  width: 80px;
  text-align: end;  
color: ${props => (props.type === 'income' ? 'var(--color-secondary)' : 'var(--color-tertiary)')};`