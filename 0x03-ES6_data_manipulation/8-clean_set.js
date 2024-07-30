#!/usr/bin/node
/*eslint-disable*/
export default function cleanSet(set, startString) {
	if (startString === undefined || startString === '') return '';
	const arr = [];
	set.forEach(function (value) {
		if (value.startsWith(startString)) {
			const val = value.slice(startString.length);
			arr.push(val);
		}
	})

	return arr.join("-");
}