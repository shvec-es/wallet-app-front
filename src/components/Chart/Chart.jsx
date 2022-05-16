import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { ChartWrapper, Total } from './Chart.styled';

ChartJS.register(ArcElement);

function Chart({ expences, total }) {
  return (
    <>
      <ChartWrapper>
        <Doughnut
          data={expences}
          options={{
            layout: {
              padding: 0,
            },
          }}
              />
        <Total>₴ {total}</Total>
      </ChartWrapper>
    </>
  );
}

export default Chart;
