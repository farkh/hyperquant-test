export const getBotActionByName = (name) => {
	switch (name) {
		case 'yellow':
			return 'Megabot';
		case 'blue':
		case 'white':
			return 'Balance';
		case 'green':
			return 'Defence';
		case 'orange':
		case 'red':
			return 'Attack';
		default:
			return '';
	}
};
