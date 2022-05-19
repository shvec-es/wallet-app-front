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
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(String(new Date().getFullYear()));

  // const dispatch = useDispatch();
  const statistics = useSelector(getTransactionsStatistics);

  const { sortingTransactions, balance } = statistics;

  // useEffect(() => {
  //    const setNormalizedMonth = (month) => {
  //   const normalizedMonth = String(month + 1);
  //   if (normalizedMonth.length < 2) {
  //     return `0${normalizedMonth}`;
  //   }
  //   return normalizedMonth;
  //   }

  //   const normalizedMonth = setNormalizedMonth(month);
  //   const fetchStatistics = (data) => dispatch(operations.fetchTransactionsStatistics(data))
  //   fetchStatistics({month:normalizedMonth, year, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODUzMmMzZDhiODMwMjM5OWVkODAxYiIsImlhdCI6MTY1Mjk4Njk0MCwiZXhwIjoxNjUyOTkwNTQwfQ.BWM4jjiUmh97Xt9pLqZ6ndjyzGdwS1qXKXiRMjmAhX4"})
  // }, [dispatch, month, year])



  const chartData = {
    labels: sortingTransactions.map(category => category.name),
    datasets: [
      {
        data: sortingTransactions.map(category => category.sum),
        backgroundColor: sortingTransactions.map(category => category.color),
        barThickness: 10,
      },
    ],
  };
 
  return (
    <TabSection>
      <div>
        <TabTitle>{t('statistic')}</TabTitle>
        <Chart expences={chartData} total={balance.consumption} />
      </div>
      <StatsTable
        categoriesStatistics={sortingTransactions}
        balance={balance}
        month={month}
        year={year}
        updateMonth={setMonth}
        updateYear={setYear}
      />
    </TabSection>
  );
}

export default DiagramTab;
