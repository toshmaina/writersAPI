const [Writer, logEvents] = [
	require("../models/Writer"),
	require("../lib/logEvents"),
];

const replaceWriter = async ({ body: substituteWriter }, res) => {
	if (!substituteWriter) return res.sendStatus(400);
	const { id, name, email, phoneNumber, active, idNumber } = substituteWriter;
	if (
		!id ||
		!name ||
		!email ||
		!phoneNumber ||
		active === undefined ||
		!idNumber
	)
		return res.sendStatus(400);
	const foundWriter = await Writer.findOne({ id });
	if (!foundWriter) return res.sendStatus(404);
	try {
		const { acknowledged } = await Writer.updateOne(
			{ id },
			{ $set: substituteWriter }
		);
		acknowledged && res.sendStatus(200);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = replaceWriter;
