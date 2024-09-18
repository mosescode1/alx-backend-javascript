#!/usr/bin/node
const express = require("express");
const fs = require("fs/promises"); // Use fs/promises for async file operations
const app = express();

app.get("/", function (req, res) {
	res.send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
	try {
		const CS = [];
		const SWE = [];

		// Check if the file exists
		await fs.access(process.argv[2]); // This will throw if the file doesn't exist

		// Read the file content asynchronously
		const data = await fs.readFile(process.argv[2], 'utf8');

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
		let output = 'This is the list of our students\n';
		output += `Number of students: ${result.length}\n`;
		output += `Number of students in CS: ${CS.length}. ${CS.join(', ')}\n`;
		output += `Number of students in SWE: ${SWE.length}. ${SWE.join(', ')}`;

		res.send(output);
	} catch (e) {
		// Handle errors here
		console.error(e); // Log the error for debugging
		res.status(500).send("Cannot load the database"); // Send a response on error
	}
});

app.listen(1245, () => {
	console.log("Server is running on port 1245");
});
module.exports = app;
