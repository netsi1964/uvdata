import React from "react";
import Film from "./film";
import Person from "./person";
import { toTitle } from "../utils";

export default class ItemDisplay extends React.PureComponent {
	static propTypes = {
		children: React.PropTypes.shape({
			url: React.PropTypes.string.isRequired,
			name: React.PropTypes.string.isRequired,
			kind: React.PropTypes.string.isRequired,
			isExpanded: React.PropTypes.bool
		})
	};

	state = {
		isExpanded: this.props.isExpanded || false
	};

	handleExpandToggle = evt => {
		if (evt.target) {
			this.props.onToggleOpen(this.props.kind, this.props.children.name);
			// this.setState(state => ({ isExpanded: !state.isExpanded }));
		}
	};

	render() {
		const {
			children: { name },
			kind,
			sortKey,
			onToggleOpen,
			isExpanded
		} = this.props;

		const attrs = {
			isExpanded,
			sortKey,
			kind,
			data: this.props.children,
			onToggleOpen
		};

		return (
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<button
									className="btn btn-xs btn-default"
									onClick={this.handleExpandToggle}
									aria-label={isExpanded ? "Collapse" : "Expand"}
								>
									{isExpanded
										? <i className="fa fa-chevron-circle-up" />
										: <i className="fa fa-chevron-circle-down" />}
								</button>
							</td>
							<td>
								{kind === "films" ? <Film {...attrs} /> : <Person {...attrs} />}
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		);
	}
}
