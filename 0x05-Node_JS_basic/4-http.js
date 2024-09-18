#!/usr/bin/node
const http = require("http")
const app = http.createServer()

app.on("request", function (req, res) {
	res.write("Hello Holberton School!")
	res.end()
})

app.listen(1245)

module.exports = app;