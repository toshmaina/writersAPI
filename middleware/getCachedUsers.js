const getCachedResults = require("../lib/getCachedResults");

const getCachedUsers = async (req, res, next) => {
	const users = await getCachedResults({ key: "users" });
	return Array.isArray(users) && users[0] ? res.json(users) : next();
};
module.exports = getCachedUsers;
