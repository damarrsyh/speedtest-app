/* eslint-disable react/prop-types */
import ReactApexChart from 'react-apexcharts';

const PingChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: 'Ping',
        data: data.map((item) => ({
          x: new Date(new Date(item.datetime).getTime() + 7 * 60 * 60 * 1000).getTime(),
          y: (item.data.ping.latency).toFixed(1),
        })),
      },
    ],
    options: {
      chart: {
        height: 250,
        type: 'area',
        background: '#121212',
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        colors: ['#ffc107'],
      },
      xaxis: {
        type: 'datetime',
        labels: { style: { colors: '#ffffff', fontFamily: 'Poppins, sans-serif' } },
        axisBorder: { color: '#555555' },
        axisTicks: { color: '#555555' },
      },
      yaxis: {
        labels: { style: { colors: '#ffffff', fontFamily: 'Poppins, sans-serif' } },
      },
      grid: {
        borderColor: '#555555',
        strokeDashArray: 4,
      },
      tooltip: {
        theme: 'dark',
        x: { format: 'dd/MM/yy HH:mm' },
        y: { formatter: (val) => `${val} Mbps` },
      },
      colors: ['#ffc107'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#ffc107'],
          stops: [0, 100],
        },
      },
    },
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={250} />;
};

export default PingChart;
