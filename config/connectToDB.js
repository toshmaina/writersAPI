const logEvents = require("../lib/logEvents");
const mongoose = require("mongoose");
const handleDBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
	} catch (error) {
		logEvents({ message: error?.message, logName: "error" });
	}
};
module.exports = handleDBConnection;
