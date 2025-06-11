// components/SplineAreaChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const SplineAreaChart2: React.FC = () => {
  const series = [
    {
      name: "Male",
      data: [3200, 4000, 3900, 4200, 5200, 7000, 6100],
    },
    {
      name: "Female",
      data: [2800, 3800, 4000, 4900, 2000, 6200, 6400],
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
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    colors: ["#3b82f6", "#ec4899"], // blue-500 for male, pink-500 for female
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
        height={240}
      />
    </div>
  );
};

export default SplineAreaChart2;
