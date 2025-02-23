import React, { useEffect, useRef, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

interface ComponentProps {
  color: string;
}

const AreaChart: React.FC<ComponentProps> = ({ color }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isCanvasJSLoaded, setIsCanvasJSLoaded] = useState(false);

  // Check if CanvasJS is loaded
  useEffect(() => {
    if (window.CanvasJS) {
      setIsCanvasJSLoaded(true);
    } else {
      const interval = setInterval(() => {
        if (window.CanvasJS) {
          setIsCanvasJSLoaded(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  // Update dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        const { width, height } = chartContainerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Chart options
  const options = {
    theme: "light2",
    backgroundColor: "transparent",
    animationEnabled: true,
    title: {
      text: "",
    },
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Value",
      includeZero: false,
      suffix: "K",
    },
    width: dimensions.width,
    height: dimensions.height,
    data: [
      {
        type: "area",
        color: color,
        markerType: "none",
        toolTipContent: "{x}: {y}",
        dataPoints: [
          { x: new Date("2025-01-01"), y: 1 },
          { x: new Date("2025-02-01"), y: 0 },
          { x: new Date("2025-03-01"), y: 2 },
          { x: new Date("2025-04-01"), y: 4 },
          { x: new Date("2025-05-01"), y: 4 },
          { x: new Date("2025-06-01"), y: 3 },
          { x: new Date("2025-07-01"), y: 2 },
          { x: new Date("2025-08-01"), y: 4 },
          { x: new Date("2025-09-01"), y: 3 },
          { x: new Date("2025-10-01"), y: 5 },
          { x: new Date("2025-11-01"), y: 2 },
          { x: new Date("2025-12-01"), y: 4 },
        ],
        fillColor: "transparent",
        fillOpacity: 0.5,
        colorSet: "gradientColors",
      },
    ],
    colorSets: {
      gradientColors: [color, color, "#FFFFFF"],
    },
  };

  if (!isCanvasJSLoaded) {
    return <div>Loading chart...</div>; // Show a loading state
  }

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "210px" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default AreaChart;