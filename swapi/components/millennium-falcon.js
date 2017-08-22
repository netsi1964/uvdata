import React from "react";
import classNames from "classnames";
import ItemDisplay from "./item-display";
import Btn from "./btn";
import SortSelector from "./sort-selector";
import { sortOptions, doSort } from "../utils";

export default class MillenniumFalcon extends React.PureComponent {
	static propTypes = {
		onChooseEndpoint: React.PropTypes.func.isRequired,
		onToggleOpen: React.PropTypes.func.isRequired,
		list: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				url: React.PropTypes.string.isRequired
			})
		).isRequired,
		side: React.PropTypes.string,
		sortKey: React.PropTypes.string
	};

	content() {
		const {
			loading,
			list,
			onChooseEndpoint,
			endpoint,
			onSortChanged,
			onToggleOpen
		} = this.props;

		if (loading) {
			return (
				<div className="loading">
					Loading {list.length}...
				</div>
			);
		}

		if (endpoint === null) {
			return <div>Please select what you want to see.</div>;
		}

		const kind = endpoint;
		const keys = sortOptions[kind];
		const sortKey = this.props.sortKey || Object.keys(keys)[0];
		const sortFunction = keys[sortKey];
		const desc = this.props.desc || false;
		const sorted = doSort(list, sortKey, desc, sortFunction);

		const attributes = {
			keys,
			sortKey,
			desc,
			onToggleOpen,
			onClick: onSortChanged,
			style: { margin: "10px 0" }
		};

		return (
			<div>
				<SortSelector {...attributes} />
				<table className="table table-striped table-hover">
					<tbody>
						{sorted.map((item, i) => {
							return (
								<tr key={item.url}>
									<ItemDisplay
										isExpanded={item.isExpanded}
										key={i}
										kind={item.kind}
										sortKey={sortKey}
										onToggleOpen={onToggleOpen}
									>
										{item}
									</ItemDisplay>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}

	render() {
		const { list, loading, onChooseEndpoint, endpoint } = this.props;

		const iconClass = classNames("fa", {
			"fa-refresh": loading,
			"fa-spin": loading,
			"fa-star": !loading
		});

		return (
			<div>
				<p>
					<i className={iconClass} /> What do you want to see?
				</p>
				<div className="btn-group">
					<Btn
						loading={loading}
						onClick={onChooseEndpoint}
						kind="People"
						active={endpoint}
					/>
					<Btn
						loading={loading}
						onClick={onChooseEndpoint}
						kind="Films"
						active={endpoint}
					/>
				</div>
				<br />
				<br />

				{this.content()}
			</div>
		);
	}
}
