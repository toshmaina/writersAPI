const [Writer, logEvents] = [
	require("../models/Writer"),
	require("../lib/logEvents"),
];

const deactivateWriter = async ({ params }, res) => {
	const { id } = params;
	if (!id) return res.sendStatus(400);
	const foundWriter = await Writer.findOne({ id });
	if (!foundWriter) return res.sendStatus(404);
	try {
		await Writer.updateOne({ id }, { $set: { active: false } }); //atomic operations
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = deactivateWriter;
