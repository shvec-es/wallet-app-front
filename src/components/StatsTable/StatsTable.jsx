
import StatsSelect from 'components/StatsSelects';

import {
  ContentWrapper,
  Table,
  TableData,
  TableHeader,
  TableRow,
  TableBody,
  HeadCell,
  ExpenceType,
  TotalTableData,
  TotalAmount,
  SelectsWrapper,
} from './StatsTable.styled';

function StatsTable({ expences, month, year, updateMonth, updateYear }) {

  const caclulateExpences = (expences) => {
    return expences.reduce((acc, expence) => acc + expence.amount, 0);
  }

  const totalExpences = caclulateExpences(expences);

  const months = [
    "September",
    "October",
    "November",
    "December"
  ];

  const years = [
    "1998",
    "1999",
    "2000"
  ]

  return (
    <ContentWrapper>
      <SelectsWrapper>
        <StatsSelect options={months} sendSelectedValue={updateMonth} startValue={month}  />
        <StatsSelect options={years} sendSelectedValue={updateYear} startValue={year} />
      </SelectsWrapper>
        <Table>
        <TableHeader>
          <TableRow>
            <HeadCell>Category</HeadCell>
            <HeadCell>Amount</HeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expences.map(expence => (
            <TableRow key={expence.type}>
              <TableData>
                <ExpenceType markColor={expence.color}>
                  {expence.type}
                </ExpenceType>
              </TableData>
              <TableData>{expence.amount}</TableData>
            </TableRow>
          ))}
          <TableRow>
            <TotalTableData>Expences:</TotalTableData>
            <TotalTableData><TotalAmount type={"expence"}>Income</TotalAmount></TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>Income:</TotalTableData>
            <TotalTableData><TotalAmount type={"income"}>{totalExpences}</TotalAmount></TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </ContentWrapper>
  );
}

export default StatsTable;
