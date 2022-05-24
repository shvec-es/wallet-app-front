import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import Chart from 'components/Chart';
import StatsTable from 'components/StatsTable';
import { useTranslation } from 'react-i18next';

import { operations } from 'redux/transactions/transactions-operations';
import {
  getTransactionsStatistics,
  getStatisticsLoading,
} from 'redux/transactions/transactions-selectors';

import { TabTitle, TabSection, NoTransactions } from './DiagramTab.styled';

function DiagramTab() {
  const { t } = useTranslation();
  const [month, setMonth] = useState(() =>
    setDefaultMonth(new Date().getMonth()),
  );
  const [year, setYear] = useState(() =>
    setDefaultYear(String(new Date().getFullYear())),
  );

  const dispatch = useDispatch();
  const statistics = useSelector(getTransactionsStatistics);
  const isLoading = useSelector(getStatisticsLoading);

  const { sortingTransactions, balance } = statistics;

  useEffect(() => {
    const fetchStatistics = data =>
      dispatch(operations.fetchTransactionsStatistics(data));
    fetchStatistics({
      month: month.value,
      year: year.value,
    });
  }, [dispatch, month, year]);

  function setNormalizedMonth(month) {
    const normalizedMonth = String(month + 1);
    if (normalizedMonth.length < 2) {
      return `0${normalizedMonth}`;
    }
    return normalizedMonth;
  }

  function getMonthName(monthNumber, location) {
    const date = new Date(1, monthNumber, 1);
    const locationOpt = location === 'eng' ? 'en-us' : 'uk-UA';
    return date.toLocaleString(locationOpt, { month: 'long' });
  }

  function setDefaultMonth(month) {
    return {
      value: setNormalizedMonth(month),
      displayValueEng: getMonthName(month, 'eng'),
      displayValueUkr: getMonthName(month, 'ukr'),
    };
  }

  function setDefaultYear(year) {
    return {
      value: year,
      displayValueEng: year,
      displayValueUkr: year,
    };
  }

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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <TabSection>
          {sortingTransactions.length === 0 ? (
            <NoTransactions>{t('no_transactions')}.</NoTransactions>
          ) : (
            <>
              <div>
                <TabTitle>{t('statistic')}</TabTitle>
                <Chart chartData={chartData} total={balance.consumption} />
              </div>
              <StatsTable
                categoriesStatistics={sortingTransactions}
                balance={balance}
                month={month}
                year={year}
                updateMonth={setMonth}
                updateYear={setYear}
              />
            </>
          )}
        </TabSection>
      )}
    </>
  );
}

export default DiagramTab;
