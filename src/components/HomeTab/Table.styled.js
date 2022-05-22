import styled from 'styled-components';

export const TableMain = styled.table`
  width: 715px;
  @media screen and (min-width: 1280px) {
    width: 745px;
  }
`;
export const TableHeader = styled.thead`
  position: sticky;
  display: block;
  padding: 7px 20px;
  font-size: 18px;
  font-weight: 700;
  background-color: var(--color-white);
  border-radius: 30px;
`;
export const TableHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const TableBody = styled.tbody`
  display: block;
  overflow: scroll;
  max-height: 60vh;
  padding: 0px 20px 15px 20px;
  font-size: 16px;
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  height: 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 250ms var(--cubic-bezier);
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.7);
  }
`;
export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  transition: transform 150ms var(--cubic-bezier);
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  &:hover {
    transform: scale(1.02) translate(3px, -1px);
    font-weight: 600;
  }
  &:hover ${ButtonDelete} {
    height: auto;
    opacity: 1;
    visibility: visible;
  }
`;

export const TableHeadCell = styled.th`
  font-weight: 700;
  text-transform: capitalize;
`;

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
    text-align: end;
  }
`;
export const TableCellColor = styled.td`
  width: 80px;
  text-align: end;
  color: ${props =>
    props.type === 'income'
      ? 'var(--color-secondary)'
      : 'var(--color-tertiary)'};
`;
export const NoTransactions = styled.p`
  margin-top: 20px;
`;
