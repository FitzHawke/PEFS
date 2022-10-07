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
    scales: {
      y: {
        title: {
          display: true,
          text: "Pace (km/h)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Run Number",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const chartRef = useRef();

  let chartData = buildChartData(rawData, selections);

  useEffect(() => {
    const chart = chartRef.current;
    const chartOpts = chart.options.scales;
    chartData = buildChartData(rawData, selections);

    if (chart.data !== chartData) {
      chart.data = chartData;

      if (pod === "d") chartOpts.y.title.text = "Distance (km)";
      else if (pod === "p") chartOpts.y.title.text = "Pace (km/h)";

      if (nod === "n") chartOpts.x.title.text = "Run Number";
      else if (nod === "d") chartOpts.x.title.text = "Run Date (YYYY-MM-DD)";

      chart.update();
    }
  }, [selections]);

  return (
    <div className=" w-full h-96 relative">
      {chartData && <Line options={options} data={chartData} ref={chartRef} />}
    </div>
  );
}

export default LineChart;
