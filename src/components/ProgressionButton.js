import React from "react";

const ProgressionButton = (props) => {
	const { handleProgressionButton, progressionCount } = props;

	let progressionButtonValue = (progressionCount) => {
		if (progressionCount < 4) {
			return "Continue";
		} else {
			return "Restart";
		}
	};

	return (
		<button
			className="progressionButton"
			onClick={() => handleProgressionButton()}
		>
			{progressionButtonValue(progressionCount)}
		</button>
	);
};

export default ProgressionButton;
