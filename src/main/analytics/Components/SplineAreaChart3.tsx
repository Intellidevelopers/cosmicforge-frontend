// components/SplineAreaChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

interface props {
    title:string,
    height:number,
}

const SplineAreaChart3: React.FC<props> = ( { title, height } ) => {
  const series = [
    {
      name: title,
      data: [3000, 4200, 3800, 5000, 6500, 5800, 7000, 300, 1000, 4000, 2700, 5992],
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
      curve: "straight",
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
      categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
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
    colors: ["#3b82f6"], // Tailwind blue-500
    tooltip: {
      theme: "light",
    },
    grid: {
      borderColor: "#e5e7eb", // Tailwind gray-200
      strokeDashArray: 4,
    },
  };

  return (
    <div className="bg-white w-full">
      <ReactApexChart options={options} series={series} type="area" height={height} />
    </div>
  );
};

export default SplineAreaChart3;
