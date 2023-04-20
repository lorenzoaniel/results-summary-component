import React, { useCallback, useEffect, useState } from "react";
import { _customtheme } from "../../styles/_customtheme";
import { MainDataType } from "../../interfaces/MainDataType";
import SummaryCard from "../card/summary";
import SummaryButton from "../button/summary";

interface Props {
	data: MainDataType;
}

const SummaryDisplay: React.FC<Props> = ({ data }) => {
	const [dataState, setDataState] = useState<MainDataType>(data);

	useEffect(() => {
		setDataState(data);
	}, [data]);

	const createCards = useCallback(
		(data: MainDataType): JSX.Element[] => {
			const cards: JSX.Element[] = [];

			for (const currData of data) {
				cards.push(
					<SummaryCard
						key={currData.category}
						iconSrc={currData.icon}
						category={currData.category}
						score={currData.score}
					/>
				);
			}

			return cards;
		},
		[dataState]
	);

	return (
		<div
			className="display-summary-container
      h-[56%]
      w-full
      bg-white
      p-[3rem]
      gap-y-[2.4rem]
      flex
      flex-col
      md:rounded-bl-[3.2rem]
      md:rounded-br-[3.2rem]
      lg:rounded-tr-[3.2rem]
      lg:h-full
      lg:w-[50%]
      lg:gap-y-0
      lg:p-[4rem]
      "
		>
			<h2
				className={`display-summary-maintitle
        ${_customtheme.mheadingm}
        text-darknavy
        ${_customtheme.headingm}
      `}
			>
				Summary
			</h2>
			<div
				className="display-summary-cards-wrapper
        flex
        flex-col
        h-fit
        gap-y-[1.6rem]
        lg:mt-[2.8rem]
        lg:mb-[4rem]
        "
			>
				{createCards(dataState)}
			</div>
			<SummaryButton title={"Continue"} />
		</div>
	);
};

export default SummaryDisplay;
