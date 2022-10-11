const getStats = (data, selection, number) => {
  let min = -1;
  let max = 0;
  let sum = 0;

  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  for (let i = sortedData.length - number; i < sortedData.length; i += 1) {
    if (sortedData[i][selection] > max) {
      max = sortedData[i][selection];
    }

    if (sortedData[i][selection] < min || min < 0) {
      min = sortedData[i][selection];
    }

    sum += sortedData[i][selection];
  }

  const avg = +(sum / number).toFixed(2);

  return { avg, min, max };
};

export default getStats;
