import { toTitle } from "../utils";

const SortSelector = props => {
	const { keys, sortKey, desc } = props;
	const buttons = Object.keys(keys).map(key => {
		const classes = `btn btn-${key == sortKey ? "primary" : "default"}`;
		return (
			<button key={key} type="button" className={classes}>
				{toTitle(key)}
			</button>
		);
	});
	return (
		<div className="btn-group" {...props}>
			<div className="btn btn-disabled">Sort by</div>
			{buttons}
		</div>
	);
};

export default SortSelector;
