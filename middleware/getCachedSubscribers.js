const getCachedResults = require("../lib/getCachedResults");

const getCachedSubscribers = async (req, res, next) => {
	const subscribers = await getCachedResults({ key: "subscribers" });
	return Array.isArray(subscribers) && subscribers[0]
		? res.json(subscribers)
		: next();
};
module.exports = getCachedSubscribers;
