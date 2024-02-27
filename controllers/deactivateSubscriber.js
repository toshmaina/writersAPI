const [Subscriber, logEvents] = [
	require("../models/Subscriber"),
	require("../lib/logEvents"),
];

const deactivateSubscriber = async ({ params }, res) => {
	const { id } = params;
	if (!id) return res.sendStatus(400);
	const foundSubscriber = await Subscriber.findOne({ id });
	if (!foundSubscriber) return res.sendStatus(404);
	try {
		await Subscriber.updateOne({ id }, { $set: { active: false } });
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = deactivateSubscriber;
