import React from "react";
import "./styles/_globalStyles.css";
import { _customtheme } from "./styles/_customtheme";

const App: React.FC = () => {
	return <div className={`App ${_customtheme.headingxl}`}>test</div>;
};

export default App;
