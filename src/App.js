import React from "react";
import OptionsList from "./components/OptionsList";
import OptionForm from "./components/OptionForm";
import Directions from "./components/Directions";
import ProgressionButton from "./components/ProgressionButton";
import FinalOption from "./components/FinalOption";
import success from "./media/success.gif";

class App extends React.Component {
	state = {
		options: [],
		progressionCount: 0,
		optionFormVisible: true,
		removeOptionVisible: false,
		finalOptionVisible: false,
		optionsListVisible: true,
		progressionButtonVisible: false,
	};

	handleProgressionButton = () => {
		if (this.state.progressionCount < 3) {
			this.setState({
				progressionCount: this.state.progressionCount + 1,
				optionFormVisible: false,
				removeOptionVisible: true,
				progressionButtonVisible: false,
			});
		} else if (this.state.progressionCount === 3) {
			this.setState({
				progressionCount: this.state.progressionCount + 1,
				finalOptionVisible: true,
				optionsListVisible: false,
			});
		} else if (this.state.progressionCount === 4) {
			this.setState({
				options: [],
				progressionCount: 0,
				optionFormVisible: true,
				removeOptionVisible: false,
				optionsListVisible: true,
				progressionButtonVisible: false,
				finalOptionVisible: false,
			});
		}
	};

	handleSubmit = (option) => {
		if (this.state.options.length < 4) {
			this.setState({ options: [...this.state.options, option] });
		} else if (this.state.options.length === 4) {
			this.setState({
				options: [...this.state.options, option],
				progressionButtonVisible: true,
				optionFormVisible: false,
			});
		}
	};

	removeOption = (index) => {
		const { options } = this.state;

		if (this.state.progressionCount === 1 && this.state.options.length === 4) {
			this.setState({
				progressionButtonVisible: true,
				removeOptionVisible: false,
			});
		} else if (
			this.state.progressionCount === 2 &&
			this.state.options.length === 3
		) {
			this.setState({
				progressionButtonVisible: true,
				removeOptionVisible: false,
			});
		} else if (
			this.state.progressionCount === 3 &&
			this.state.options.length === 2
		) {
			this.setState({
				progressionButtonVisible: true,
				removeOptionVisible: false,
			});
		}

		this.setState({
			options: options.filter((opton, i) => {
				return i !== index;
			}),
		});
	};

	progressionButtonSetStyle = () => {
		if (!this.state.progressionButtonVisible) {
			return { display: "none" };
		}
	};

	removeOptionSetStyle = () => {
		if (!this.state.removeOptionVisible) {
			return { display: "none" };
		}
	};

	optionFormSetStyle = () => {
		if (!this.state.optionFormVisible) {
			return { display: "none" };
		}
	};

	finalOptionSetStyle = () => {
		if (!this.state.finalOptionVisible) {
			return { display: "none" };
		}
	};

	optionsListSetStyle = () => {
		if (!this.state.optionsListVisible) {
			return { display: "none" };
		}
	};

	render() {
		const { options, progressionCount } = this.state;

		return (
			<div className="app">
				<Directions
					className="directions"
					progressionCount={progressionCount}
				/>
				<div style={this.finalOptionSetStyle(this.finalOptionVisible)}>
					<FinalOption options={options} />
					<img src={success} height={250} width={250} alt="Woohoo!" />
				</div>
				<div style={this.optionsListSetStyle(this.optionsListVisible)}>
					<OptionsList
						optionsData={options}
						removeOption={this.removeOption}
						removeOptionSetStyle={this.removeOptionSetStyle}
						removeOptionVisible={this.removeOptionVisible}
					/>
				</div>
				<div style={this.optionFormSetStyle()}>
					<OptionForm handleSubmit={this.handleSubmit} />
				</div>
				<div style={this.progressionButtonSetStyle()}>
					<ProgressionButton
						handleProgressionButton={this.handleProgressionButton}
						progressionCount={progressionCount}
					/>
				</div>
			</div>
		);
	}
}

export default App;
