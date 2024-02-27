const Employer = require("../models/Employer");

const handleEmployer = async ({ params: { id } }, res) => {
	const employer = Employer.findOne({ id });
	res.json(employer);
};
module.exports = handleEmployer;
