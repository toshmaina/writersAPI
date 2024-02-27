const Writer = require("../models/Writer");

const getWriters = async (req, res) => {
	const result = await Writer.find().exec();
	res.json(result);
};
module.exports = getWriters;
