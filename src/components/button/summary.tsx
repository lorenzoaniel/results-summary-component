import React from "react";
import { _customtheme } from "../../styles/_customtheme";

interface Props {
	title: string;
}

const SummaryButton: React.FC<Props> = ({ title }) => {
	return (
		<button
			className={`summary-button
      w-full
      h-[5.6rem]
      bg-darknavy
      rounded-[12.8rem]
      ${_customtheme.mheadingm}
      text-white
      hover:bg-gradient1
      active:bg-gradient1active
      `}
		>
			{title}
		</button>
	);
};

export default SummaryButton;
