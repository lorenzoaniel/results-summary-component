export const calculateAverage = (data: number[]): number => {
	if (data.length < 1) throw Error("there is no data");
	let average = 0;
	data.forEach((currNumber: number) => {
		average += currNumber;
	});
	average = Math.floor(average / data.length);

	return average;
};
