const User = require("../models/User");
const jwt = require("jsonwebtoken");
const generateAccessTokenFromRefreshToken = async ({ cookies }, res) => {
	if (!cookies?.refreshToken) return res.sendStatus(401); //unauthorized
	const { refreshToken } = cookies;
	const foundUser = await User.findOne({ refreshToken }).exec();

	if (!foundUser) return res.sendStatus(403); //forbidden the refresh token might have been tampered with
	const { name: foundUserName } = foundUser;

	//evaluate jwt
	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		(error, { name: decodedUserName }) => {
			if (!!error?.message || decodedUserName !== foundUserName)
				return res.sendStatus(403);
			const accessToken = jwt.sign(
				{ name: foundUser.name },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "15m" }
			);
			res.json({ accessToken });
		}
	);
};
module.exports = generateAccessTokenFromRefreshToken;
