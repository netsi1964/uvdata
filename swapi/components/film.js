import { sortOptions } from "../utils";

const Film = props => {
	const cols = Object.keys(sortOptions["films"]).map(key => {
		return (
			<div>
				{props[key]}
			</div>
		);
	});
	return (
		<div>
			{cols}
		</div>
	);
};

export default Film;
