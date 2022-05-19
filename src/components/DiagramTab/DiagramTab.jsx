import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from 'components/Chart';
import StatsTable from 'components/StatsTable';
import { useTranslation } from 'react-i18next';

import { operations } from 'redux/transactions/transactions-operations';
import { getTransactionsStatistics } from 'redux/transactions/transactions-selectors';

import { TabTitle, TabSection, ContentWrapper } from './DiagramTab.styled';


function DiagramTab() {
    const { t } = useTranslation();
  const [month, setMonth] = useState(setDefaultMonth());
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [expences, setExpences] = useState([
    { type: 'main expences', amount: 100, color: '#FFDD33' },
    { type: 'housing', amount: 86, color: '#FF5E33' },
    { type: 'products', amount: 40, color: '#2BF956' },
  ]);
  const statistics = useSelector(getTransactionsStatistics);
  const dispatch = useDispatch();

console.log(statistics)

  useEffect(() => {
    const fetchStatistics = (data) => dispatch(operations.fetchTransactionsStatistics(data))
    fetchStatistics({month: '05', year: '2022', token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODUzMmMzZDhiODMwMjM5OWVkODAxYiIsImlhdCI6MTY1MjkzMDc5MywiZXhwIjoxNjUyOTM0MzkzfQ.fgzZQ0Xb6x5RoWro-kPj_15w7br_axUoGC_G6X4N6a8"})
  }, [dispatch])

  function setDefaultMonth() {
    const month = new Date().getMonth();
    const normalizedMonth = String(month + 1);
    if (normalizedMonth.length < 2) {

      return `0${normalizedMonth}`
    }
    return normalizedMonth;
  }

  const chartData = {
    labels: expences.map(expence => expence.type),
    datasets: [
      {
        data: expences.map(expence => expence.amount),
        backgroundColor: expences.map(expence => expence.color),
        barThickness: 10,
      },
    ],
  };
  const total = expences.reduce((a, expence) => a + expence.amount, 0);
  return (
    <TabSection>
      <div>
        <TabTitle>{t('statistics')}</TabTitle>
        <Chart expences={chartData} total={total} />
      </div>
      {Object.keys(statistics).length > 0 &&
      <StatsTable
        categoriesStatistics={statistics.sortingTransactions}
        balance={statistics.balance}
        month={month}
        year={year}
        updateMonth={setMonth}
        updateYear={setYear}
      />}

    </TabSection>
  );
}

export default DiagramTab;
