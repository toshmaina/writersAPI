const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
	const authHeader =
		req.headers["authorization"] ?? req.headers["Authorization"];
	if (!authHeader) return res.sendStatus(401);
	if (!authHeader.startsWith("Bearer"))
		return res
			.sendStatus(400)
			.json({ error: "Use the Bearer Token authorization" });
	const accessToken = authHeader.split(" ")[1];
	jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
		if (error) return res.json({ message: "Invalid access token" }).status(401);
		req.user = decoded.name;
		next();
	});
};
module.exports = verifyJWT;
