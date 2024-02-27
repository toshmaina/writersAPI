const Subscriber = require("../models/Subscriber");

const removeSpecificSubscribers = async ({ body }, res) => {
	const { ids } = body;
	if (!Array.isArray(ids))
		return res
			.status(400)
			.json({ error: "subscribers ids must be provided as an array" });
	ids.map(async (id) => await Subscriber.deleteMany({ id }));
	//TODO : evaluate whether the action was successful before returning the success response code
	res.sendStatus(204);
};
module.exports = removeSpecificSubscribers;
