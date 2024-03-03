const [Subscriber, { format }, logEvents] = [
	require("../models/Subscriber"),
	require("date-fns"),
	require("../lib/logEvents"),
];

const replaceSubscriber = async ({ body: substituteSubscriber }, res) => {
	if (!substituteSubscriber) return res.sendStatus(400);
	const { id, name, status, phoneNumber, amount } = substituteSubscriber;
	const foundSubscriber = await Subscriber.findOne({ id }).exec();
	if (!foundSubscriber) return res.sendStatus(404);
	if (!id || !name || !amount || !phoneNumber || status === undefined)
		return res.sendStatus(400);
	const amountInNumber = typeof amount === "string" ? +amount : amount;
	console.log(typeof amountInNumber);

	if (amountInNumber !== 300 && amountInNumber !== 500)
		return res.status(400).json({
			error:
				"Monthly of amount 500 and Weekly of amount 300 are the only available plans for subscription",
		});

	const planOptions = {
		300: format(
			new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //weekly
			"yyyy-MM-dd HH:mm:ss"
		),

		500: format(
			new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //monthly
			"yyyy-MM-dd HH:mm:ss"
		),
	};

	const planExpiry = planOptions[amountInNumber];

	const allSubstituteSubscriberDetails = {
		...substituteSubscriber,
		amount: amountInNumber,
		subscribedAt: format(new Date(Date.now()), "yyyy-MM-dd HH:mm:ss"),
		expiryDate: planExpiry,
	};
	try {
		const { acknowledged } = await Subscriber.updateOne(
			{ id },
			{ $set: allSubstituteSubscriberDetails }
		);
		acknowledged && res.sendStatus(200);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = replaceSubscriber;
