import React from "react";

const Directions = (props) => {
	const { progressionCount } = props;

	const directionsList = [
		"Please enter 5 options",
		"Eliminate 2 options",
		"Eliminate 1 option",
		"Eliminate 1 more option to determine your decision",
		"Congrats! You finally made a decision!",
	];

	return (
		<header>
			<h3 className="directions">{directionsList[progressionCount]}</h3>
		</header>
	);
};

export default Directions;
