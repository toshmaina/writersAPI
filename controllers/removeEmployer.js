const Employer = require("../models/Employer");

const removeEmployer = async ({ params: { id } }, res) => {
	await Employer.deleteOne({ id });
	res.sendStatus(204);
};
module.exports = removeEmployer;
