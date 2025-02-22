import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const StepCountChart:React.FC = () => {
  const chartRef = useRef<am4charts.XYChart | null>(null);

  useEffect(() => {
    // Apply amCharts theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    const rawData = [
      { category: "Jan", value: 100 },
      { category: "Feb", value: 40 },
      { category: "Mar", value: 10 },
      { category: "Apr", value: 60 },
      { category: "May", value: 90 },
      { category: "Jun", value: 5 },
      { category: "Jul", value: 75 },
      { category: "Aug", value: 100 },
      { category: "Sep", value: 40 },
      { category: "Oct", value: 10 },
      { category: "Nov", value: 60 },
      { category: "Dec", value: 90 },
    ];

      // Find the maximum value in the data
      const maxValue = Math.max(...rawData.map((item) => item.value));

      // Normalize data to percentages
      const normalizedData = rawData.map((item) => ({
        category: item.category,
        value: (item.value / maxValue) * 100, // Convert to percentage
      }));
  
      chart.data = normalizedData;

         // Create X-axis (category axis)
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    // Create Y-axis (value axis)
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0; // Set minimum value to 0%
    valueAxis.max = 100; // Set maximum value to 100%
    valueAxis.strictMinMax = true; // Enforce the min and max values
    valueAxis.numberFormatter.numberFormat = "#'%'"; // Format as percentages

    console.log(valueAxis)

    // Create series (column series)
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "value";
    series.columns.template.width = am4core.percent(50); // Adjust bar width
    series.columns.template.stroke = am4core.color("#921009"); // Bar border color
    series.columns.template.fill = am4core.color("#921009"); // Bar fill color

    // Add horizontal gradient fill to bars
    series.columns.template.adapter.add("fill", (fill, target) => {
      console.log(fill, target)
      const gradient = new am4core.LinearGradient();
      gradient.rotation = 90; // Rotate gradient to make it horizontal
      gradient.addColor(am4core.color("#961711")); // Start color (left)
      gradient.addColor(am4core.color("#450603")); // End color (right)
      return gradient;
    });

    

    // Add rounded corners to bars (top and bottom)
    series.columns.template.column.cornerRadiusTopLeft = 40;
    series.columns.template.column.cornerRadiusTopRight = 40;
    series.columns.template.column.cornerRadiusBottomLeft = 40;
    series.columns.template.column.cornerRadiusBottomRight = 40;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Store chart instance
    chartRef.current = chart;

    // Cleanup on unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "210px" }}></div>;
};

export default StepCountChart;