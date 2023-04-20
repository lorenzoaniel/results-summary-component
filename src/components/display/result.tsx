import React from "react";
import { _customtheme } from "../../styles/_customtheme";

interface Props {
	resultAverage: number;
	percentageExceeded: number;
	performanceScore: string;
}

const ResultDisplay: React.FC<Props> = ({
	resultAverage,
	percentageExceeded,
	performanceScore,
}) => {
	return (
		<div
			className="display-result-container
      bg-gradient1
      h-[44%]
      w-full
      rounded-bl-[3.2rem]
      rounded-br-[3.2rem]
      flex
      flex-col
      items-center
			gap-y-[2.4rem]
			pt-[2.4rem]
			
			md:rounded-[3.2rem]
      lg:h-full
      lg:w-[50%]
			lg:pt-[3.8rem]
			lg:gap-y-0
      "
		>
			<h1
				className={`display-result-maintitle
				${_customtheme.mheadingm}
				text-lightblue
				${_customtheme.headingm}
				`}
			>
				Your Result
			</h1>
			<div
				className="display-result-result-container
				bg-gradient2
				h-[14rem]
				w-[14rem]
				rounded-full
				flex
				flex-col
				justify-center
				items-center
				lg:h-[20rem]
				lg:w-[20rem]
				lg:mt-[3.5rem]
				"
			>
				<span
					className={`display-result-result-container-numberResult
							${_customtheme.mheadingxl}
							text-white
							${_customtheme.headingxl}
							`}
				>
					{resultAverage}
				</span>
				<span
					className={`display-result-result-container-numberTotal
							${_customtheme.mbodyb}
							opacity-[0.52]
							text-lightblue
							${_customtheme.bodyb}
							`}
				>
					of 100
				</span>
			</div>
			<div
				className="display-result-placement-wrapper
			 			h-fit 
						w-fit 
						flex 
						flex-col 
						items-center 
						justify-center 
						gap-y-[0.8rem]
						lg:mt-[2.8rem]
						lg:gap-y-[1.4rem]
			 			"
			>
				<h2
					className={`display-result-placement-score
					${_customtheme.mheadingl}
					text-white
					${_customtheme.headingl}
					`}
				>
					{performanceScore}
				</h2>
				<h3
					className={`display-result-placement-desc
					${_customtheme.mbodyb}
					text-lightblue
					text-center
					w-[27rem]
					${_customtheme.body}
					`}
				>
					Your performance exceeded
					<span
						className={`display-result-placement-desc-percentageExceeded
							${_customtheme.mbodyb}
							text-lightblue
							`}
					>
						{` ${percentageExceeded}% `}
					</span>
					of the people conducting the test here!
				</h3>
			</div>
		</div>
	);
};

export default ResultDisplay;
