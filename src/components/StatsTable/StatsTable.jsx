
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

function StatsTable({ categoriesStatistics, balance, month, year, updateMonth, updateYear }) {

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
          {categoriesStatistics.map(category => (
            <TableRow key={category.name}>
              <TableData>
                <ExpenceType markColor={category.color}>
                  {category.name}
                </ExpenceType>
              </TableData>
              <TableData>{category.sum}</TableData>
            </TableRow>
          ))}
          <TableRow>
            <TotalTableData>Expences:</TotalTableData>
            <TotalTableData><TotalAmount type={"expence"}>{balance.consumption}</TotalAmount></TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>Income:</TotalTableData>
            <TotalTableData><TotalAmount type={"income"}>{balance.income}</TotalAmount></TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </ContentWrapper>
  );
}

export default StatsTable;
