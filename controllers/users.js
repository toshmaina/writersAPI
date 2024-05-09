const User = require("../models/User");

const getUsers = async (req, res) => {
	const result = await User.find().exec();
	res.json(result);
	console.log("Endpoint hit");
};
module.exports = getUsers;
