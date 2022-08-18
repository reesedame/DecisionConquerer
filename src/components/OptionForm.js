import React, { Component } from "react";

class OptionForm extends Component {
	initialState = {
		option: "",
	};

	state = this.initialState;

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	submitOptionForm = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.option);
		this.setState(this.initialState);
	};

	render() {
		const { option } = this.state;

		return (
			<form onSubmit={this.submitOptionForm}>
				<input
					className="optionForm"
					type="text"
					placeholder="Enter Option"
					name="option"
					id="option"
					value={option}
					onChange={this.handleChange}
					autoComplete="off"
					required
				/>
			</form>
		);
	}
}

export default OptionForm;
