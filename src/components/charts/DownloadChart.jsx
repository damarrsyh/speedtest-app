import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DownloadChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: 'Bandwidth Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(),
          y: item.data.download.bandwidth,
        })),
      },
    //   {
    //     name: 'Bytes Speed',
    //     data: data.map((item) => ({
    //       x: new Date(item.datetime).getTime(),
    //       y: item.data.download.bytes,
    //     })),
    //   },
    ],
    options: {
      chart: {
        height: 250,
        type: 'area',
        background: '#f8f9fa',
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        colors: ['#007bff', '#28a745'],
      },
      xaxis: { type: 'datetime' },
      tooltip: {
        x: { format: 'dd/MM/yy HH:mm' },
      },
      colors: ['#007bff', '#28a745'],
    },
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={250} />;
};

export default DownloadChart;
