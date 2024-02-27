const Subscriber = require("../models/Subscriber");

const handleSubscribers = async (req, res) => {
	const subscribers = Subscriber.find();
	res.json(subscribers);
};
module.exports = handleSubscribers;
