import React, { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import Chart from 'chart.js/auto';

export default function RatingPieChart({ rating }) {
  const chartRef = useRef(null);
  const chartContainerRef = useRef(null);

  const chartData = useMemo(() => {
    const percentage = rating * 20;
    return {
      labels: ['remaining', 'Rating percentage'],
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ['#9c0000', 'black'],
        },
      ],
    };
  }, [rating]);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: chartData,
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  useLayoutEffect(() => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      chartRef.current.width = chartContainer.clientWidth;
      chartRef.current.height = chartContainer.clientHeight;
    }
  }, []);

  return (
    <div className="chartContainer" ref={chartContainerRef}>
      <canvas ref={chartRef} />
      <div className="rating-text">Average: {`${rating}/5`}</div>
    </div>
  );
}
