#!/usr/bin/node
// ! Using Process stdin
process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.on("data", function (data) {
	process.stdout.write(`Your name is: ${data.toString()}`);
	process.exit();
})

process.on("exit", function () {
	process.stdout.write('This important software is now closing\n');
});