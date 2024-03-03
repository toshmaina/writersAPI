const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const removeEmployer = async ({ params: { id } }, res) => {
	const foundEmployer = await Employer.findOne({ id }).exec();
	if (!foundEmployer) return res.sendStatus(404);
	try {
		const { acknowledged } = await Employer.deleteOne({ id });
		acknowledged && res.sendStatus(200);
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
};
module.exports = removeEmployer;
