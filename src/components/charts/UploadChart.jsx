import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UploadChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: 'Bandwidth Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(),
          y: item.data.upload.bandwidth,
        })),
      },
    //   {
    //     name: 'Bytes Speed',
    //     data: data.map((item) => ({
    //       x: new Date(item.datetime).getTime(),
    //       y: item.data.upload.bytes,
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

export default UploadChart;
