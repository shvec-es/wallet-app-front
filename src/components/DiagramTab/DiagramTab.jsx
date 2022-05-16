import { useState } from 'react';

import Chart from 'components/Chart';
import StatsTable from 'components/StatsTable';
import { useTranslation } from 'react-i18next';

import { TabTitle, TabSection } from './DiagramTab.styled';

function DiagramTab() {
  const { t } = useTranslation();
  const [expences, setExpences] = useState([
    { type: 'main expences', amount: 100, color: '#FFDD33' },
    { type: 'housing', amount: 86, color: '#FF5E33' },
    { type: 'products', amount: 40, color: '#2BF956' },
  ]);

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
      <TabTitle>{t('statistics')}</TabTitle>
      <Chart expences={chartData} total={total} />
      <StatsTable expences={expences} />
    </TabSection>
  );
}

export default DiagramTab;
