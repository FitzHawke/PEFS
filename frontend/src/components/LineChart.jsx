import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import buildChartData from "../utils/buildChartData";

function LineChart({ rawData, pod, nod, disNum }) {
  const selections = {
    paceOrDistance: pod,
    numsOrDate: nod,
    displayNum: disNum,
  };
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

  const chartRef = useRef();

  let builtData = buildChartData(rawData, selections);
  const chartData = { labels: builtData.labels, datasets: [builtData.dataset] };
  chartData.datasets[0].data = builtData.data;

  useEffect(() => {
    const chart = chartRef.current;
    builtData = buildChartData(rawData, selections);

    if (chart.data.labels !== builtData.labels) {
      chart.data.labels = builtData.labels;
      chart.update();
    }

    if (chart.data.datasets[0].data !== builtData.data) {
      chart.data.datasets[0].data = builtData.data;
      chart.update();
    }
  }, [selections]);

  return (
    <div className=" w-full h-96 relative">
      <Line options={options} data={chartData} ref={chartRef} />
    </div>
  );
}

export default LineChart;
