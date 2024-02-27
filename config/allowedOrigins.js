const whiteList =
	process.env.NODE_ENV === "production"
		? ["https://www.writers.com", "https://www.mySite.com"]
		: ["http://localhost:3000", "https://www.google.com"];
module.exports = whiteList;
