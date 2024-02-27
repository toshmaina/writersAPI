const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const deactivateEmployer = async ({ params }, res) => {
	const { id } = params;
	if (!id) return res.sendStatus(400);
	const foundEmployer = await Employer.findOne({ id }).exec();
	if (!foundEmployer) return res.sendStatus(404);
	try {
		await Employer.updateOne({ id }, { $set: { active: false } });
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = deactivateEmployer;
