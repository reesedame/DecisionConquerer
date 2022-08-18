import React from "react";

const FinalOption = (props) => {
	const { options } = props;

	return <h4 className="finalOption">{options[0]}</h4>;
};

export default FinalOption;
