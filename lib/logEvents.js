const [path, { promises: fsPromises }, { v4: uuid }, { format }] = [
	require("path"),
	require("fs"),
	require("uuid"),
	require("date-fns"),
];

const logEvents = async ({ message, logName }) => {
	const eventTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");
	const log = `${uuid()} ${eventTime} ${message} \n\n\n\n`;
	try {
		await fsPromises.appendFile(
			path.join(__dirname, "..", "logs", `${logName}Logger.txt`),
			log
		);
	} catch (error) {
		console.error(error);
	}
};
module.exports = logEvents;
