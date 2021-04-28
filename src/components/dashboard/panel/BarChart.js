import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['New', 'Opened', 'Closed', 'Resolved'],
    datasets: [
      {
        label: 'System Tickets',
        data: [15, 19, 6, 10],
        backgroundColor: [
          'rgba(255, 193, 7, 0.7)',
          'rgba(40, 167, 69, 0.7)',
          'rgba(187, 65, 77, 0.7)',
          'rgba(23, 162, 184, 0.7)',
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
      },
    ],
  });

  const chartOptions = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        labels: {
          color: '#8a8d93',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(138, 141, 147, 0.2)',
        },
        ticks: {
          color: '#8a8d93',
        },
      },
      x: {
        grid: {
          color: 'rgba(138, 141, 147, 0.2)',
        },
        ticks: {
          color: '#8a8d93',
        },
      },
    },
  };

  return (
    <div className='pie-chart chart block '>
      <div className='title'>
        <strong>Bar Chart Example</strong>
      </div>

      <div>
        <Bar data={chartData} height={300} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
