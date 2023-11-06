export default function timeDifference(time1, time2) {
	const t1Arr = time1.split(":");
	const t2Arr = time2.split(":");

	const t1 = t1Arr.map((element) => Number(element));

	const t2 = t2Arr.map((element) => Number(element));

	// account for the possibility of time going past midnight
	if (t1[0] > t2[0] || (t1[0] === t2[0] && t1[1] > t2[1])) {
		t2[0] += 24;
	}

	return (t2[0] - t1[0]) * 60 + (t2[1] - t1[1]);
}
