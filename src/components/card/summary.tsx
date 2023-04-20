import React from "react";
import { _customtheme } from "../../styles/_customtheme";
import iconReaction from "../../assets/images/icon-reaction.svg";
import iconMemory from "../../assets/images/icon-memory.svg";
import iconVerbal from "../../assets/images/icon-verbal.svg";
import iconVisual from "../../assets/images/icon-visual.svg";

interface Props {
	iconSrc: string;
	category: string;
	score: number;
}

const SummaryCard: React.FC<Props> = ({ iconSrc, category, score }) => {
	const imageMap: { [key: string]: string } = {
		"icon-reaction": iconReaction,
		"icon-memory": iconMemory,
		"icon-verbal": iconVerbal,
		"icon-visual": iconVisual,
	};
	const importedIconSrc = imageMap[iconSrc];

	const bgColorMap: { [key: string]: string } = {
		Reaction: "bg-redwhite",
		Memory: "bg-yellowwhite",
		Verbal: "bg-greenwhite",
		Visual: "bg-bluewhite",
	};

	const textColorMap: { [key: string]: string } = {
		Reaction: "text-red",
		Memory: "text-yellow",
		Verbal: "text-green",
		Visual: "text-blue",
	};

	return (
		<div
			className={`summary-card
      h-[5.6rem]
      w-[31.5rem]
      ${bgColorMap[category]}
      rounded-[1.2rem]
      flex
      justify-between
      px-[1.6rem]
      py-[1.7rem]
			lg:w-[28.8rem]
      `}
		>
			<div className="summary-card-wrapper w-fit h-fit flex gap-x-[1.2rem]">
				<img src={importedIconSrc} className="summary-card-icon" />
				<h3
					className={`summary-card-category
          ${_customtheme.mbody}
          ${textColorMap[category]}
					${_customtheme.body}
          `}
				>
					{category}
				</h3>
			</div>
			<div className="summary-card-score-wrapper">
				<span
					className={`summary-card-score
          ${_customtheme.mbodyb}
          text-darknavy
          opacity-100
					${_customtheme.bodyb}
          `}
				>
					{score}
				</span>{" "}
				<span
					className={`summary-card-outofscore
          ${_customtheme.mbodyb}
          text-darknavy
          opacity-50
					${_customtheme.bodyb}
          `}
				>
					/ 100
				</span>{" "}
			</div>
		</div>
	);
};

export default SummaryCard;
