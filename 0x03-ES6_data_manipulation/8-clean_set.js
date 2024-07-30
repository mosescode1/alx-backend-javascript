#!/usr/bin/node
/*eslint-disable*/
export default function cleanSet(set, startString) {
	if (!(set instanceof Set) || typeof startString !== 'string') return '';

	const arr = [];
	set.forEach(function (value) {
		if (value.startsWith(startString)) {
			const val = value.slice(startString.length);
			arr.push(val);
		}
	})

	return arr.join("-");
}