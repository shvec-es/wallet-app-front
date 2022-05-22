import StatsSelect from 'components/StatsSelects';

import {useSelector } from 'react-redux';

import { getYears, getMonths } from 'redux/transactions/transactions-selectors';

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
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language.slice(0, 2);
  
  const statsMonths = useSelector(getMonths);
  const statsYears = useSelector(getYears);

  const formatdNumber = (number) => {
    return number.toFixed(2) 
  }

  return (
    <ContentWrapper>
      <SelectsWrapper>
        <StatsSelect
          type='months'
          options={statsMonths}
          sendSelectedValue={updateMonth}
          startValue={month}
        />
        <StatsSelect
          type='years'
          options={statsYears}
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
                  {currentLng === "en" ? category.name : category.nameUA}
                </ExpenceType>
              </TableData>
              <TableData>{category.sum && formatdNumber(category.sum)}</TableData>
            </TableRow>
          ))}
          <TableRow>
            <TotalTableData>{t('expense')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'expence'}>{balance.consumption && formatdNumber(balance.consumption)}</TotalAmount>
            </TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>{t('income')}:</TotalTableData>
            <TotalTableData>
              <TotalAmount type={'income'}>{balance.income && formatdNumber(balance.income)}</TotalAmount>
            </TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </ContentWrapper>
  );
}

export default StatsTable;
