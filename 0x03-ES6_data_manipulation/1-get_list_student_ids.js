/*eslint-disable*/
export default function getListStudentIds(array) {
	if (!Array.isArray(array)) {
		return [];
	}

	const ids = array.map(elem => elem.id);
	return ids;
}
