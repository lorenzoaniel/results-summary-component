import React from "react";
import "./styles/_globalStyles.css";
import { _customtheme } from "./styles/_customtheme";
import ResultSummary from "./components/resultsSummary";
import data from "./api/data.json";

const App: React.FC = () => {
	return (
		<main
			className="App
			bg-verylightblue
			flex
			justify-center
			items-center
			min-h-screen
		"
		>
			<ResultSummary data={data} />
		</main>
	);
};

export default App;
