#!/usr/bin/node
// ! 0. Executing basic javascript with Node JS
const displayMessage = (message) => {
	process.stdout.write(`${message}\n`);
}
module.exports = displayMessage;