const Widget = require("../models/Widget");

const getWidgets = async (req, res) => {
	const widgets = await Widget.find();
	res.json(widgets);
};
module.exports = getWidgets;
