import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { ChartWrapper, Total } from './Chart.styled';

ChartJS.register(ArcElement);

function Chart({ chartData, total }) {
  return (
    <>
      <ChartWrapper>
        <Doughnut
          data={chartData}
          options={{
             maintainAspectRatio: false, 
            layout: {
              padding: 0,
            },
          }}
              />
        <Total>{chartData.datasets[0].data.length > 0 && `₴ ${total}`}</Total>
      </ChartWrapper>
    </>
  );
}

export default Chart;
