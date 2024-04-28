const connectToRedis = require("../config/connectToRedisCache");
const Employer = require("../models/Employer");
const getCachedResults = require("../lib/getCachedResults");

const getCachedEmployers = async (req, res, next) => {
	const employers = await getCachedResults({ key: "employers" });
	return Array.isArray(employers) && employers[0]
		? res.json(employers)
		: next();
};
module.exports = getCachedEmployers;
