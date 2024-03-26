const [mongoose, logEvents] = [
	require("mongoose"),
	require("../lib/logEvents"),
];
const handleMongoDBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
	} catch (error) {
		logEvents({ message: error?.message, logName: "error" });
	}
};
module.exports = handleMongoDBConnection;
