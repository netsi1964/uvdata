const Person = props => {
	let { name, height, hair_color, gender, skin_color, eye_color } = props;
	console.log(props);
	let hair = (hair_color==='none' || hair_color==='n/a') ? 'balled head' : hair_color+' haired';
	return (
		<div>
			<h2>
				{name}{" "}
				{gender!=='n/a'
					? `is a  ${height} cm tall ${hair} ${gender}`
					: `is a ${height} cm tall ${skin_color} non-human`}
					{' with '}<span style={{"font-size":"2em", "color":eye_color, 'text-shadow':'0 0 5px hsl(0,0%,30%)'}}>{eye_color}</span> eyes.
			</h2>
		</div>
	);
};

export default Person;
