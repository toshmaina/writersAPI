const User = require("../models/User");

const getUser = async ({ params: { id } }, res) => {
	const users = await User.find();
	const user = users.filter(({ id: userId }) => userId === id);
	res.json(user);
};
module.exports = getUser;
