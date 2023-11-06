function buildTrendline(data, selection, number) {
	let sumX = 0;
	let sumY = 0;
	let sumXY = 0;
	let sumX2 = 0;
	let j = 0;

	for (let i = data.length - number; i < data.length; i += 1) {
		const x = j;
		const y = data[i][selection];
		sumX += x;
		sumY += y;
		sumXY += x * y;
		sumX2 += x ** 2;
		j += 1;
	}

	const slope = (number * sumXY - sumX * sumY) / (number * sumX2 - sumX ** 2);
	const intercept = (sumY - slope * sumX) / number;

	const trendLine = [];
	for (let i = 0; i < number; i += 1) {
		trendLine.push(+(slope * i + intercept).toFixed(2));
	}

	return trendLine;
}

function buildChartData(rawData, selections) {
	const style = getComputedStyle(document.body);
	const lineColor = style.getPropertyValue("--a");
	const trendColor = style.getPropertyValue("--p");
	const textColor = style.getPropertyValue("--ac");

	// rawData.sort((a, b) => a.date - b.date);

	const labels = [];
	const data = [];
	const sortedData = [...rawData].sort(
		(a, b) => new Date(a.date) - new Date(b.date),
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

	if (selections.trend) {
		const trendLine = buildTrendline(
			sortedData,
			selections.paceOrDistance === "p" ? "pace" : "distance",
			selections.displayNum,
		);
		chartData.datasets.push({
			label: "Trend",
			backgroundColor: `hsl(${trendColor})`,
			borderColor: `hsl(${trendColor})`,
			color: `hsl(${textColor})`,
			data: trendLine,
		});
	}

	return chartData;
}

export default buildChartData;
