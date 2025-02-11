import ReactApexChart from 'react-apexcharts';

const DownloadChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: 'Bandwidth Speed',
        data: data.map((item) => ({
          x: new Date(new Date(item.datetime).getTime() + 7 * 60 * 60 * 1000).getTime(),
          y: parseFloat((item.data.download.bandwidth / 1000000).toFixed(2)),
        })),
      },
    ],
    options: {
      chart: {
        height: 250,
        type: 'area',
        background: '#ececec',
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        colors: ['#28a745'],
      },
      xaxis: {
        type: 'datetime',
        labels: { style: { fontFamily: 'Poppins, sans-serif' } },
        axisBorder: { color: '#555555' },
        axisTicks: { color: '#555555' },
      },
      yaxis: {
        labels: { style: { fontFamily: 'Poppins, sans-serif' } },
      },
      grid: {
        borderColor: '#555555',
        strokeDashArray: 4,
      },
      tooltip: {
        theme: 'light',
        x: { format: 'dd/MM/yy HH:mm' },
        y: { formatter: (val) => `${val} Mbps` },
      },
      colors: ['#28a745'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['#28a745'],
          stops: [0, 100],
        },
      },
    },
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={250} />;
};

export default DownloadChart;
