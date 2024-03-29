const rawTime = () => {
	const currentDate = new Date();
	const hour = currentDate.getHours();
	const min = currentDate.getMinutes();

	return { hour, min };
};

const currTime = () => {
	const { hour, min } = rawTime();
	const currHour = `0${hour}`.slice(-2);
	const currMin = `0${min}`.slice(-2);

	return `${currHour}:${currMin}`;
};

const offSet = () => {
	const { hour, min } = rawTime();
	const pastHour = `0${hour - 1}`.slice(-2);
	const pastMin = `0${min}`.slice(-2);

	return `${pastHour}:${pastMin}`;
};

const currDate = () => {
	const currentDate = new Date();
	const day = `0${currentDate.getDate()}`.slice(-2);
	// Have to add 1 because months are zero indexed in javascript
	const month = `0${currentDate.getMonth() + 1}`.slice(-2);
	const year = currentDate.getFullYear();

	return `${year}-${month}-${day}`;
};

const currYear = () => new Date().getFullYear()

const getNow = {
	currTime,
	offSet,
	currDate,
	currYear
};

export default getNow;
