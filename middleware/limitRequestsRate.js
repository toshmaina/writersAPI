const { rateLimit } = require("express-rate-limit");

// Rate limit middleware
const rateLimitMiddleware = rateLimit({
	windowMs: 60 * 1000,
	max: 5,
	message: "You have exceeded your 5 requests per minute limit.",
	headers: true,
});

module.exports = rateLimitMiddleware;
