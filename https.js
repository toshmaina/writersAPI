const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const { format } = require("date-fns");
const port = process.env.PORT || 8000;

const sendFile = (req, res, next) => {
	/* fs.appendFile(
        path.join(__dirname, "files", "logger.txt"),
        "utf8",
        `${req.method} method sent from ${req.url} at ${format(
            Date.now(),
            "yyyy-MM-dd"
        )}`
    ); */
	res.sendFile(path.join(__dirname, "files", "texts.txt"));
	next();
};
const writeLogs = (req, res, next) => {
	fs.appendFile(
		path.join(__dirname, "files", "logger.txt"),
		`${req.method} method sent from ${req.url} at ${format(
			Date.now(),
			"yyyy-MM-dd"
		)}\n`,
		() => {}
	);
	next();
};

const confirmMessage = () => {
	console.log("All the actions completed successfully!");
};
app.get("/api", [sendFile, writeLogs, confirmMessage]);
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
