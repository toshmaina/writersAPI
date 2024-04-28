const cachedResults = require("../lib/getCachedResults");

const getCachedWriters = async (req, res, next) => {
	const writers = await cachedResults({ key: "writers" });
	if (Array.isArray(writers) && writers[0]) return res.json(writers);
	next();
};
module.exports = getCachedWriters;
