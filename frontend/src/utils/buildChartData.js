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

  for (
    let i = sortedData.length - selections.displayNum;
    i < sortedData.length;
    i += 1
  ) {
    if (selections.numsOrDate === "d") {
      labels.push(sortedData[i].date);
    } else {
      labels.push(i + 1);
    }

    if (selections.paceOrDistance === "p") {
      data.push(sortedData[i].pace);
    } else {
      data.push(sortedData[i].distance);
    }
  }

  const dataLabel = selections.paceOrDistance === "p" ? "Pace" : "Distance";

  const chartData = {
    labels,
    datasets: [
      {
        label: dataLabel,
        backgroundColor: `hsl(${lineColor})`,
        borderColor: `hsl(${lineColor})`,
        color: `hsl(${textColor})`,
        data,
      },
    ],
  };
  return chartData;
  // return { labels, data, dataset };
}

export default buildChartData;
