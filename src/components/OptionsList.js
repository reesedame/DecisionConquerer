import React from "react";

const OptionsList = (props) => {
	const {
		optionsData,
		removeOption,
		removeOptionSetStyle,
		removeOptionVisible,
	} = props;

	return (
		<ul className="optionsList">
			{optionsData.map((option, index) => {
				return (
					<li className="optionsListItem" key={index}>
						{option}
						<button
							className="removeOptionButton"
							style={removeOptionSetStyle(removeOptionVisible)}
							onClick={() => removeOption(index)}
						>
							X
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default OptionsList;
