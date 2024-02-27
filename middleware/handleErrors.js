const logger = require("../lib/logEvents");

const handleErrors = (error, req, res, next) => {
	logger({ message: error?.message, logName: "error" });
	console.error(error.stack);
	res.send(error.stack);
	next();
};
module.exports = handleErrors;
