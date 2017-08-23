import {
	sortOptions,
	toTitle,
	formatStringDate,
	itemInfo,
	RawHTML,
	calculateBmi
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
			name,
			birth_year,
			hair_color,
			eye_color,
			skin_color,
			gender,
			height,
			mass
		} = data;
		const keys = Object.keys(sortOptions["films"]);
		let content = null;
		let sortedInfo = data[sortKey];



		const genderTitle = ` ${gender !== "none"
			? gender === "female" ? "She" : "He"
			: "It"}`;
		const appear = calculateBmi(mass, height);
		const isMachine = "nonen/a".indexOf(gender)>-1;
		const machine = isMachine ? '"' : "";
		const  appearence = (appear!=='' && !isMachine) ? ` — appearing ${appear} —` : '';
		const genderSign = (!isMachine) ? ((gender==='male') ? '♂' : '♁') : '';

		const header = (
			<h3>
				{name} <small>{genderSign}</small>
			</h3>
		);
		const title =
			sortKey !== "name"
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
					<div className="col-xs-12">
						{header}

						<div>
							{name}
							{birth_year !== "unknown"
								? ` is born in the year ${birth_year}`
								: ` came to life on an unknown date`}.
							<br />
							{`${genderTitle} is a ${!isMachine && hair_color!=='none'
								? hair_color +
									(hair_color.indexOf("blonde") > -1 ? "" : " haired")
								: " hairless"}`}
								{`${skin_color !== "unknown"
									? ", "+ skin_color.replace(/, /ig, "/") + ' ' +
										machine +
										"skin colored" + machine
									: ""}`}
							{`${eye_color !== "unknown"
								? ", " +
									machine +
									eye_color.replace(/, /ig, "/") +
									" eyed" +
									machine
								: ""}`}
							{` ${isMachine ? "machine" : gender}.`}
							<br />
							{` ${genderTitle}${appearence} has the height of ${height !== "unknown"
								? height
								: ""} cm`}
							{(mass!=='unknown') ? ` weighing ${mass} kg` : ''}.

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
