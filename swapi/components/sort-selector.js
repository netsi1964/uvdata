import { toTitle } from "../utils";
import classNames from "classnames";

const SortSelector = props => {
	const { keys, sortKey, desc, onClick, style } = props;
	const buttons = Object.keys(keys).map(key => {
		const current = key == sortKey;
		const btnClasses = classNames("btn", {
			"btn-primary": current,
			"btn-default": !current
		});
		const iconClass = classNames("fa",  "fa-sort-desc", {
			"fa-rotate-180": desc,
			hidden: !current
		});
		const label = toTitle(key);
		return (
			<button
				key={key}
				type="button"
				className={btnClasses}
				onClick={() => onClick(key, current ? !desc : desc)}
				aria-label={label}
			>
				{label} <i className={iconClass} />
			</button>
		);
	});
	const attrs = {
		style,
		"role": "group",
		"aria-label": "Sort by"
	};
	return (
		<div className="btn-group btn-group-xs" {...attrs}>
			<div className="btn btn-disabled">Sort by</div>
			{buttons}
		</div>
	);
};

export default SortSelector;
