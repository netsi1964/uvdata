import React from "react";
import Film from "./film";
import Person from "./person";

export default class ItemDisplay extends React.PureComponent {
	static propTypes = {
		children: React.PropTypes.shape({
			url: React.PropTypes.string.isRequired,
			name: React.PropTypes.string.isRequired,
			kind: React.PropTypes.string.isRequired
		})
	};

	state = {
		isExpanded: false
	};

	handleExpandToggle = () => {
		this.setState(state => ({ isExpanded: !state.isExpanded }));
	};

	render() {
		const { children: { name }, onExpandToggle, kind } = this.props;
		const { isExpanded } = this.state;

		return (
			<span>
				<button
					className="btn btn-xs btn-default"
					onClick={this.handleExpandToggle}
					aria-label={isExpanded ? "Collapse" : "Expand"}
				>
					{isExpanded
						? <i className="fa fa-chevron-circle-up" />
						: <i className="fa fa-chevron-circle-down" />}
				</button>{" "}
				{name}
				{isExpanded
					? kind === "films"
						? <Film {...this.props.children} />
						: <Person {...this.props.children} />
					: null}
			</span>
		);
	}
}
