const comparerDefault = (a, b) => {
	return a > b ? -1 : a == b ? 0 : 1;
};

const comparerLength = (a, b) => {
	return a.length > b.length ? -1 : a == b ? 0 : 1;
};
const comparerFloat = (a, b) => {
	a = parseFloat(a);
	b = parseFloat(b);
	a = isNaN(a) ? -1 : a;
	b = isNaN(b) ? -1 : b;
	return a > b ? -1 : a == b ? 0 : 1;
};
const comparerStringDate = (a, b) => {
	const tempA = a.split('-'),
				tempB = b.split('-');
	a = new Date(tempA[0],tempA[1],tempA[2]);
	b = new Date(tempB[0],tempB[1],tempB[2]);
	return a.length > b.length ? -1 : a == b ? 0 : 1;
};

const sortOptions = {
	films: {
		title: comparerDefault,
		director: comparerDefault,
		producer: comparerDefault,
		planets: comparerLength,
		release_date: comparerStringDate,
		created: comparerDefault
	},
	people: {
		name: comparerDefault,
		height: comparerFloat,
		mass: comparerFloat,
		hair_color: comparerDefault,
		skin_color: comparerDefault,
		eye_color: comparerDefault,
		species: comparerLength
	}
};

const doSort = (list, sortKey, desc, comparer) => {
	const trueValue = desc ? -1 : 1;
	const falseValue = desc ? 1 : -1;
	return list.sort((a, b) => {
		const result = comparer(a[sortKey], b[sortKey]);
		return result ===1
			? trueValue
			: result==0 ? 0 : falseValue;
	});
};

const toTitle = string =>
	string
		.split("_")
		.map((item, i) => {
			return i > 0
				? item
				: item.substr(0, 1).toUpperCase() + item.substr(1, item.length - 1);
		})
		.join(" ");

export { sortOptions, doSort, toTitle };
