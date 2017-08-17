const RenderHeight = props => {
	const { height } = props;
	const style = {'fontSize': `${(height-50)/100}em`}
	return (
		<span style={style}>
			{height}
		</span>
	);
};
const Person = props => {
	let { name, height, hair_color, gender, skin_color, eye_color } = props;
	console.log(props);
	let hair =
		hair_color === "none" || hair_color === "n/a"
			? "balled head"
			: hair_color + " haired";
	return (
		<div>
			<h2>
				{name} <RenderHeight {...props} />
				<span
					style={{
						"fontSize": "2em",
						"color": eye_color,
						"textShadow": "0 0 5px hsl(0,0%,30%)"
					}}
				>
					{eye_color}
				</span>{" "}
				eyes.
			</h2>
		</div>
	);
};

export default Person;
