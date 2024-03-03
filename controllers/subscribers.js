const Subscriber = require("../models/Subscriber");

const handleSubscribers = async (req, res) => {
	const subscribers = await Subscriber.find().exec();
	res.json(subscribers);
};
module.exports = handleSubscribers;
