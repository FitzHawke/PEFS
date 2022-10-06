function buildChartData(rawData) {
  const style = getComputedStyle(document.body);
  const lineColor = style.getPropertyValue("--a");
  const textColor = style.getPropertyValue("--ac");

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: `hsl(${lineColor})`,
        borderColor: `hsl(${lineColor})`,
        color: `hsl(${textColor})`,
        data: [0, 10, 5, 2, 20, 30, 45, 60, 25, 10],
      },
    ],
  };

  return data;
}

export default buildChartData;
