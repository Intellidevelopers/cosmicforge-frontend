import React from "react";
import ReactApexChart from "react-apexcharts";

interface props {
    h:number;
}

const TotalEarningsCard: React.FC<props> = ( { h } ) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Net Income", "Commission"],
    colors: ["#1E2DBA", "#A7A8DA"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
   plotOptions: {
        pie: {
            donut: {
            size: "75%",
            labels: {
                show: true, // ✅ MUST be true
                name: {
                show: true,
                formatter: () => "Earnings",
                },
                value: {
                show: true,
                formatter: () => "₦ 356 K",
                },
                total: {
                show: false, // keep this false to avoid default behavior
                },
            },
            },
        },
    },
    stroke: {
      show: false,
    },
  };

  const chartSeries = [75, 25]; // Example data

  return (
    <div className="bg-white w-[100%] p-2">
      <div className="mb-2">
        <p className="font-semibold text-sm text-gray-900">Total Earnings</p>
        <p className="text-xs text-green-600 mt-1">▲ 3.2% from last month</p>
      </div>
      <div className="flex justify-center">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={h?h:170}
        />
      </div>
      <div className="flex justify-around mt-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#1E2DBA]"></span>
          <span className="text-gray-700">Net Income</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#A7A8DA]"></span>
          <span className="text-gray-700">Commission</span>
        </div>
      </div>
    </div>
  );
};

export default TotalEarningsCard;
