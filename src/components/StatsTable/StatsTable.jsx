
import StatsSelect from 'components/StatsSelects';

import {
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

function StatsTable({ expences }) {

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
    <div>
      <SelectsWrapper>
      <StatsSelect options={months} buttonTitle='Month'/>
      <StatsSelect options={years} buttonTitle='Year'/>
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
    </div>
  );
}

export default StatsTable;
