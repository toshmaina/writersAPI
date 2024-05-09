const Employer = require("../models/Employer");

const handleEmployers = async (req, res) => {
	console.log("Endpoint hit");
	const employers = await Employer.find().exec();
	res.json(employers);
};
module.exports = handleEmployers;
