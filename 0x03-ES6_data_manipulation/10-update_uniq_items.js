#!/usr/bin/node
/*eslint-disable*/
export default function updateUniqueItems(mapArg) {
	for (const [key, value] of mapArg) {
		if (value == 1) {
			try {

				mapArg.set(key, 100);
			} catch (err) {
				throw new Error("Cannot process");
			}
		}
	}
}