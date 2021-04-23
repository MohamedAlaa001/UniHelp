import { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['New', 'Opened', 'Closed', 'Resolved'],
    datasets: [
      {
        // label: 'Tickets',
        data: [15, 19, 6, 10],
        backgroundColor: [
          'rgba(255, 193, 7, 0.6)',
          'rgba(40, 167, 69, 0.6)',
          'rgba(187, 65, 77, 0.6)',
          'rgba(23, 162, 184, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 193, 7, 1)',
          'rgba(40, 167, 69, 1)',
          'rgba(187, 65, 77, 1)',
          'rgba(23, 162, 184, 1)',
        ],
        borderColor: [
          'rgba(255, 193, 7, 1)',
          'rgba(40, 167, 69, 1)',
          'rgba(187, 65, 77, 1)',
          'rgba(23, 162, 184, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  });

  const chartOptions = {
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: 'left',
        labels: {
          color: '#8a8d93',
          font: {
            size: '14',
          },
        },
      },
    },
  };

  return (
    <div className='pie-chart chart block '>
      <div className='title'>
        <strong>Pie Chart Example</strong>
      </div>

      <div>
        <Pie data={chartData} height={300} options={chartOptions} />
      </div>
    </div>
  );
};

export default PieChart;
