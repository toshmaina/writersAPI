const [Employer, logEvents] = [
	require("../models/Employer"),
	require("../lib/logEvents"),
];

const replaceEmployer = async (
	{ body: substituteEmployer, params: { id } },
	res
) => {
	if (!substituteEmployer) return res.sendStatus(400);
	const {
		id: substituteId,
		name,
		email,
		phoneNumber,
		active,
		idNumber,
	} = substituteEmployer;
	if (
		!substituteId ||
		!name ||
		!email ||
		!phoneNumber ||
		active === undefined ||
		idNumber
	)
		return res.sendStatus(400);
	const foundEmployer = await Employer.findOne({ id });
	if (!foundEmployer) return res.sendStatus(404);
	try {
		await Employer.updateMany({ id }, { $set: substituteEmployer });
	} catch (error) {
		logEvents({ message: error.message, logName: "error" });
	}
	res.sendStatus(204);
};
module.exports = replaceEmployer;
