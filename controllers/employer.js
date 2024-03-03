const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const getEmployer = async ({ params: { id } }, res) => {
	try {
		const employer = await Employer.findOne({ id }).exec();
		res.json(employer);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = getEmployer;
