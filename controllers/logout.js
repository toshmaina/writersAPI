const User = require("../models/User");

const handleLogout = async ({ cookies }, res) => {
	//delete the access token on the client
	const refreshToken = cookies?.refreshToken;
	if (!refreshToken) return res.sendStatus(204);
	const foundUser = User.findOne({ refreshToken }).exec();
	if (!foundUser) return res.sendStatus(204);
	//set the refresh token to empty and save to the database
	foundUser.refreshToken = "";
	const result = await foundUser.save();
	console.log(result);

	//clear the cookie store

	res.clearCookie("refreshToken", {
		maxAge: 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "None",
	});
	res.sendStatus(204);
};
module.exports = handleLogout;
