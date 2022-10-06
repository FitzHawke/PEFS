import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import buildChartData from "../utils/buildChartData";

function LineChart({ rawData }) {
  const data = buildChartData(rawData);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className=" w-full h-96 relative">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
