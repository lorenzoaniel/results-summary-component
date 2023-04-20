import React, { useEffect, useState } from "react";
import ResultDisplay from "../display/result";
import SummaryDisplay from "../display/summary";
import { calculateAverage } from "../../lib/calculateAverage";
import { MainDataType } from "../../interfaces/MainDataType";

interface Props {
	data: MainDataType;
}

const ResultSummary: React.FC<Props> = ({ data }) => {
	const [avgResult, setAvgResult] = useState(0);
	const [scoreArr, setScoreArr] = useState<number[]>(
		data.map((curr): number => {
			return curr.score;
		})
	);

	/* 
    generates a score array which is stored in a state,
    that state value is used by calculateAverage
    which returns the average
  */
	useEffect(() => {
		const initialRun = async () => {
			const tempScoreArr: number[] = await data.map((curr): number => {
				return curr.score;
			});
			await setScoreArr(tempScoreArr);
			await setAvgResult(calculateAverage(scoreArr));
		};

		initialRun();
	}, [data]);

	return (
		<div
			className="result-summary-component-wrapper
    bg-white
      flex
      flex-col
      h-[80.9rem]
      w-[37.5rem]
      justify-center
      items-center
      rounded-[3.2rem]
      lg:h-[51.2rem]
      lg:w-[73.6rem]
      lg:flex-row
    "
		>
			{/* replace percentageExceeded/performanceScore static value with dynamic value if data is available */}
			<ResultDisplay resultAverage={avgResult} percentageExceeded={65} performanceScore={"Great"} />
			<SummaryDisplay data={data} />
		</div>
	);
};

export default ResultSummary;
