const [User, logEvents] = [
	require("../models/User"),
	require("../lib/logEvents"),
];

const getUser = async ({ params: { id } }, res) => {
	try {
		const foundUser = await User.findOne({ id }).exec();
		if (!foundUser) return res.sendStatus(404);
		res.json(foundUser);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = getUser;
