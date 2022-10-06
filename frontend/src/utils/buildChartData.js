function buildChartData(rawData, selections) {
  const style = getComputedStyle(document.body);
  const lineColor = style.getPropertyValue("--a");
  const textColor = style.getPropertyValue("--ac");

  // rawData.sort((a, b) => a.date - b.date);

  const labels = [];
  const data = [];
  const sortedData = [...rawData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  for (let i = 0; i < sortedData.length; i += 1) {
    if (selections.numsOrDate === "date") {
      labels.push(sortedData[i].date);
    } else {
      labels.push(i + 1);
    }

    if (selections.paceOrDistance === "pace") {
      data.push(sortedData[i].pace);
    } else {
      data.push(sortedData[i].distance);
    }
  }

  const dataset = {
    label: "Pace/Date",
    backgroundColor: `hsl(${lineColor})`,
    borderColor: `hsl(${lineColor})`,
    color: `hsl(${textColor})`,
  };

  // const chartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Pace/Date",
  //       backgroundColor: `hsl(${lineColor})`,
  //       borderColor: `hsl(${lineColor})`,
  //       color: `hsl(${textColor})`,
  //       data,
  //     },
  //   ],
  // };

  // return chartData;
  return { labels, data, dataset };
}

export default buildChartData;
