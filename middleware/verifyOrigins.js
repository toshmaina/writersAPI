const allowedOrigins = require("../config/allowedOrigins");

/* This is required since on the client the credentials - include is required in the fetch api . This is only set for the allowed origins   */

const verifyOrigins = (req, res, next) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin))
		res.header("Access-Control-Allow-Origin", true);
	next();
};
module.exports = verifyOrigins;
