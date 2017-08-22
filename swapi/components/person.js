import {
	sortOptions,
	toTitle,
	formatStringDate,
	itemInfo,
	RawHTML
} from "../utils";
import moment from "moment";

// const Film = props => {
class Person extends React.PureComponent {
	static propTypes = {
		data: React.PropTypes.shape({
			birth_year: React.PropTypes.string,
			created: React.PropTypes.string,
			edited: React.PropTypes.string,
			eye_color: React.PropTypes.string,
			films: React.PropTypes.arrayOf(React.PropTypes.string),
			gender: React.PropTypes.string,
			hair_color: React.PropTypes.string,
			height: React.PropTypes.string,
			homeworld: React.PropTypes.string,
			kind: React.PropTypes.string,
			mass: React.PropTypes.string,
			name: React.PropTypes.string,
			skin_color: React.PropTypes.string,
			species: React.PropTypes.arrayOf(React.PropTypes.string),
			starships: React.PropTypes.arrayOf(React.PropTypes.any),
			url: React.PropTypes.string,
			vehicles: React.PropTypes.arrayOf(React.PropTypes.any)
		}),
		kind: React.PropTypes.string,
		sortKey: React.PropTypes.string
	};

	render() {
		window.a = this.props;
		const { isExpanded, sortKey, kind, data } = this.props;
		const {
			director,
			producer,
			opening_crawl,
			planets,
			characters,
			species,
			vehicles,
			starships
		} = data;
		const keys = Object.keys(sortOptions["films"]);
		let content = null;
		const rd = moment(data["release_date"]);

		const dateString = rd.fromNow();
		let sortedInfo = data[sortKey];
		switch (sortKey) {
			case "release_date":
				sortedInfo = rd.fromNow();
				break;
			case "species":
				sortedInfo = sortedInfo.length;
				break;
			case "planets":
				sortedInfo = sortedInfo.length;
				break;
		}

		const header = (
			<h3>
				{data["name"]}
			</h3>
		);
		const title =
			sortKey !== "title"
				? <small>
						{toTitle(sortKey)}: {sortedInfo}
					</small>
				: null;

		content = !isExpanded
			? <div className="col-xs-12">
					{header}
					{title}
				</div>
			: <div>
					<div className="col-xs-5">
						<h3>
							{header}
						</h3>
						<pre>
							Released on {moment(rd).format("dddd MMM Do YYYY")}
						</pre>
						<div>
							Back in {rd.year()}
							<em> {director}</em> was director on this movie produced by{" "}
							<em>{producer}</em>.
						</div>
						<div>
							This movie spreads across {itemInfo("planet", planets)}, has{" "}
							{itemInfo("character", characters)}, {itemInfo("specie", species)},{" "}
							{itemInfo("vehicle", vehicles)} and{" "}
							{itemInfo("starship", starships)}.
						</div>
					</div>
					<div className="col-xs-7">
						<div className="jumbotron">
							<h4>Opering crawl</h4>
							<RawHTML>
								{opening_crawl}
							</RawHTML>
						</div>
					</div>
				</div>;

		return (
			<div className="container">
				{content}
			</div>
		);
	}
}

export default Person;
