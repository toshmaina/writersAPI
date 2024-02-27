const Subscriber = require("../models/Subscriber");

const handleSubscriber = async ({ params: { id } }, res) => {
	const subscriber = Subscriber.findOne({ id });
	res.json(subscriber);
};
module.exports = handleSubscriber;
