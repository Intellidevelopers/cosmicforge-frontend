import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { useEffect, useRef, useState } from "react";

interface component {
    color:String,
}

const SplineAreaChart: React.FC<component> = ( { color }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null); // Ref for the container
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); // State for dimensions

  // Update dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        const { width, height } = chartContainerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial update
    updateDimensions();

    // Update on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Chart options
  const options = {
    theme: "light2", // Use "light2", "dark1", "dark2", etc.
    backgroundColor: "transparent", // Set background color to transparent
    animationEnabled: true, // Enable animations
    title: {
      text: "", // Chart title
    },
    axisX: {
      valueFormatString: "MMM", // Format for X-axis labels
    },
    axisY: {
      title: "Value", // Y-axis title
      includeZero: false, // Start Y-axis from zero
      suffix: "K",
    },
    width: dimensions.width, // Set chart width dynamically
    height: dimensions.height,
    data: [
      {
        type: "splineArea", // Set chart type to spline area
        color: color, // Customize spline color
        markerType: "none",
        toolTipContent: "{x}: {y}",
        dataPoints: [
          { x: new Date("2025-01-01"), y: 1 },
          { x: new Date("2025-02-01"), y: 0 },
          { x: new Date("2025-03-01"), y: 2 },
          { x: new Date("2025-04-01"), y: 3 },
          { x: new Date("2025-05-01"), y: 2 },
          { x: new Date("2025-06-01"), y: 5 },
          { x: new Date("2025-07-01"), y: 3 },
          { x: new Date("2025-08-01"), y: 4 },
          { x: new Date("2025-09-01"), y: 4 },
          { x: new Date("2025-10-01"), y: 3 },
          { x: new Date("2025-11-01"), y: 5 },
          { x: new Date("2025-12-01"), y: 4 },
        ],
        // Use colorSet to create the gradient effect
        fillColor: "transparent", // Remove any predefined solid fill
        fillOpacity: 0.5,
        colorSet: "gradientColors",
      },
    ],
    colorSets: {
      gradientColors: [
        color, // Light pink
        color, // Keep pink for initial gradient
        "#FFFFFF", // White color at the end for the fade effect
      ],
    },
  };

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "210px" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default SplineAreaChart;
