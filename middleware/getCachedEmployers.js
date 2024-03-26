const connectToRedis = require("../config/connectToRedisCache");

const getCachedEmployers = async (req, res, next) => {
	const client = await connectToRedis();
	if (!client) next();
	const response = await client.get("employers");
	const employers = JSON.parse(response);
	if (Array.isArray(employers) && employers[0]) return res.json(employers);
	next();
};
module.exports = getCachedEmployers;
