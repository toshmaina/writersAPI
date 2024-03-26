const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const getEmployer = async ({ params: { id } }, res) => {
	try {
		const foundEmployer = await Employer.findOne({ id }).exec();
		if (!foundEmployer) return res.sendStatus(404);
		res.json(foundEmployer);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = getEmployer;
