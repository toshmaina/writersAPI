const allowedOrigins = require("./allowedOrigins");
const corsOptions = {
	origin: (origin, callback) => {
		allowedOrigins.includes(origin) || !origin
			? callback(null, true)
			: callback(
					new Error(
						`The domain ${origin} is not allowed to access the resource `
					)
			  );
	},
	optionsSuccessStatus: 200,
};
module.exports = corsOptions;
