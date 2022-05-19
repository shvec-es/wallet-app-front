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

function StatsTable({ categoriesStatistics, balance, month, year, updateMonth, updateYear }) {
  const { t } = useTranslation();
  
  
  const getMonthName = (monthNumber) => {
    const date = new Date(1, monthNumber, 1); 
    return date.toLocaleString('en-us', { month: 'long' }); 
  }

  const months = ['September', 'October', 'November', 'December'];

  const years = ['1998', '1999', '2000'];

  const displayMonth = getMonthName(month)
  return (
    <ContentWrapper>
      <SelectsWrapper>
        <StatsSelect
          options={months}
          sendSelectedValue={updateMonth}
          startValue={displayMonth}
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
            <TotalTableData>{t('expense')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'expence'}>{balance.consumption}</TotalAmount>
            </TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>{t('income')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'income'}>{balance.income}</TotalAmount>
            </TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </ContentWrapper>
  );
}

export default StatsTable;
