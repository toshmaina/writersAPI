const Employer = require("../models/Employer");

const handleEmployers = async (req, res) => {
	const employers = await Employer.find();
	res.json(employers);
};
module.exports = handleEmployers;
