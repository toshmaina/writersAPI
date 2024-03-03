const [Subscriber, logEvents] = [
	require("../models/Subscriber"),
	require("../lib/logEvents"),
];

const handleSubscriber = async ({ params: { id } }, res) => {
	try {
		const foundSubscriber = await Subscriber.findOne({ id }).exec();
		if (!foundSubscriber) return res.sendStatus(404);
		res.json(foundSubscriber);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = handleSubscriber;
