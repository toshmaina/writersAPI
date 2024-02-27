const Writer = require("../models/Writer");

const getWriter = async ({ params: { id } }, res) => {
	const foundWriter = await Writer.findOne({ id });
	if (!foundWriter) return res.sendStatus(404);
	res.json(foundWriter);
};
module.exports = getWriter;
