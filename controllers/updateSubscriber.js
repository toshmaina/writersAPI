const [Subscriber, { format }, logEvents] = [
	require("../models/Subscriber"),
	require("../lib/logEvents"),
];

const replaceSubscriber = async ({ body: substituteSubscriber }, res) => {
	if (!substituteSubscriber) return res.sendStatus(400);
	const { id, name, status, phoneNumber, amount } = body;
	if (!id || !name || !amount || !phoneNumber || status === undefined)
		return res.sendStatus(400);
	const foundSubscriber = await Subscriber.findOne({ id });
	if (!foundSubscriber) return res.sendStatus(404);
	const allSubstituteSubscriberDetails = {
		...substituteSubscriber,
		subscribedAt: format(new Date(Date.now()), "yyyy-MM-dd HH:mm:ss"),
		expiryAt: format(
			new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
			"yyyy-MM-dd HH:mm:ss"
		), //subscription expires in 30 days time
	};
	try {
		await Subscriber.updateMany(
			{ id },
			{ $set: allSubstituteSubscriberDetails }
		);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = replaceSubscriber;
