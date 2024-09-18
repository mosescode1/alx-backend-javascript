#!/usr/bin/node
const fs = require("fs");
// ! Reading a file synchronously with Node JS

const countStudents = (path) => {

	const CS = []
	const SWE = []
	try {
		if (!fs.existsSync(path))
			throw new Error("Cannot load the database");

		const data = fs.readFileSync(path, "utf8");
		const rows = data.split("\n");
		const spllitted = rows.map((row) => row.split(','));

		const headers = spllitted[0]; // The first array contains the headers
		const row = spllitted.slice(1); // The rest contain the data

		const result = row.map(row => {
			return headers.reduce((obj, key, index) => {
				obj[key] = row[index];
				return obj;
			}, {});

		});
		result.forEach((row) => {
			if (row.field === 'CS') {
				CS.push(row.firstname);
			} else if (row.field === 'SWE') {
				SWE.push(row.firstname);
			}
		})
		console.log(`Number of students: ${result.length}`)
		console.log(`Number of students in CS: ${CS.length}. ${CS.join(", ")}`)
		console.log(`Number of students in SWE: ${SWE.length}. ${SWE.join(", ")}`)
	} catch (err) { console.log(err) }
}


module.exports = countStudents;