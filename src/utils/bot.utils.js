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

export const getNeighborsIndexes = (index) => {
	switch (index) {
		case 0:
			return {
				arrowIndexes: [1, 3, 4],
				botIndexes: [1, 3, 4],
			};
		case 1:
			return {
				arrowIndexes: [1, 2, 5, 6, 7],
				botIndexes: [0, 2, 3, 4, 5],
			};
		case 2:
			return {
				arrowIndexes: [2, 8, 9],
				botIndexes: [1, 4, 5],
			};
		case 3:
			return {
				arrowIndexes: [3, 5, 10],
				botIndexes: [0, 1, 4],
			};
		case 4:
			return {
				arrowIndexes: [4, 6, 8, 10, 11],
				botIndexes: [0, 1, 2, 3, 5],
			};
		case 5:
			return {
				arrowIndexes: [7, 9, 11],
				botIndexes: [1, 2, 4],
			};
		default:
			break;
	}
};
