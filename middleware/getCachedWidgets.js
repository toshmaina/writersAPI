const cachedResults = require("../lib/getCachedResults");

const getCachedWidgets = async (req, res, next) => {
	const widgets = await cachedResults({ key: "widgets" });
	return Array.isArray(widgets) && widgets[0] ? res.json(widgets) : next();
};
module.exports = getCachedWidgets;
