const [bcrypt, User, jwt] = [
	require("bcrypt"),
	require("../models/User"),
	require("jsonwebtoken"),
];

const handleLogin = async ({ body }, res) => {
	if (!body) return res.json({ message: "request body is required" });
	const { name, password } = body;
	if (!name || !password)
		return res.json({ message: "name and  password must be provided" });
	const foundUser = await User.findOne({ name }).exec();

	if (!foundUser) return res.sendStatus(401);

	const { password: foundUserPassword, name: foundUserName } = foundUser;
	//evaluate password
	const isPasswordMatching = await bcrypt.compare(password, foundUserPassword);
	console.log(isPasswordMatching);

	if (!isPasswordMatching) return res.sendStatus(401);
	//generate access token
	const accessToken = jwt.sign(
		{ name: foundUserName }, //using the name property is the most preffered way to create the token
		process.env.ACCESS_TOKEN_SECRET || "",
		{ expiresIn: "15m" }
	);
	const refreshToken = jwt.sign(
		{ name: foundUserName },
		process.env.REFRESH_TOKEN_SECRET || "",
		{ expiresIn: "1d" }
	);

	foundUser.refreshToken = refreshToken;
	const result = await foundUser.save();
	/*         send the refresh token as a cookie with the httpOnly option this makes it available on the server only and not client this makes it unaccessible with js */

	//The secure property in options is important to ensure the security of the cookie handled by the browser but should be removed when testing with any http testing tool e.g postman
	res.cookie("refreshToken", refreshToken, {
		maxAge: 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "None",
	});
	res.json({ accessToken });
};
module.exports = handleLogin;
