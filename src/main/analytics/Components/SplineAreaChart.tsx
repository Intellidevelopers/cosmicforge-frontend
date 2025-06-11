// components/SplineAreaChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

interface props {
  color: string;
  title: string;
  data: number[];
}

const SplineAreaChart: React.FC<props> = ({ color, title, data }) => {
  const series = [
    {
      name: title,
      data: data,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 95, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    colors: [color], // blue-500 for male, pink-500 for female
    tooltip: {
      theme: "light",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontFamily: "Inter, sans-serif",
    },
    grid: {
      borderColor: "#e5e7eb", // gray-200
      strokeDashArray: 4,
    },
  };

  return (
    <div className="bg-white w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
      />
    </div>
  );
};

export default SplineAreaChart;
