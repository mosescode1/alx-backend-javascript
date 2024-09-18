#!/usr/bin/node
const fs = require('fs').promises; // Use fs.promises for async/await

const countStudents = async (path) => {
	const CS = [];
	const SWE = [];
	try {
		// Check if the file exists
		if (!await fs.access(path).then(() => true).catch(() => false)) {
			throw new Error('Cannot load the database');
		}

		// Read the file content asynchronously
		const data = await fs.readFile(path, 'utf8');

		// Split data into rows and then into columns
		const rows = data.trim().split('\n');
		const splitted = rows.map(row => row.split(','));

		// Extract headers and data rows
		const headers = splitted[0];
		const row = splitted.slice(1);

		// Convert rows into objects with headers as keys
		const result = row.map(row => {
			return headers.reduce((obj, key, index) => {
				obj[key] = row[index];
				return obj;
			}, {});
		});

		// Separate students into CS and SWE
		result.forEach(row => {
			if (row.field === 'CS') {
				CS.push(row.firstname);
			} else if (row.field === 'SWE') {
				SWE.push(row.firstname);
			}
		});

		// Output the results
		let output = `Number of students: ${result.length}\n`
		output += `Number of students in CS: ${CS.length}. ${CS.join(', ')}\n`;
		output += `Number of students in SWE: ${SWE.length}. ${SWE.join(', ')}`

		console.log(output);
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = countStudents;
