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
import { useTranslation } from 'react-i18next';

function StatsTable({ expences, month, year, updateMonth, updateYear }) {
  const { t } = useTranslation();
  const caclulateExpences = expences => {
    return expences.reduce((acc, expence) => acc + expence.amount, 0);
  };

  const totalExpences = caclulateExpences(expences);

  const months = ['September', 'October', 'November', 'December'];

  const years = ['1998', '1999', '2000'];

  return (
    <ContentWrapper>
      <SelectsWrapper>
        <StatsSelect
          options={months}
          sendSelectedValue={updateMonth}
          startValue={month}
        />
        <StatsSelect
          options={years}
          sendSelectedValue={updateYear}
          startValue={year}
        />
      </SelectsWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <HeadCell>{t('category')}</HeadCell>
            <HeadCell>{t('amount')}</HeadCell>
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
            <TotalTableData>{t('expense')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'expence'}>Income</TotalAmount>
            </TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>{t('income')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'income'}>{totalExpences}</TotalAmount>
            </TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </ContentWrapper>
  );
}

export default StatsTable;
