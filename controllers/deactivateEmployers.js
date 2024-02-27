const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const deactivateEmployer = async (req, res) => {
	try {
		await Employer.updateMany({}, { $set: { active: false } });
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = deactivateEmployer;
