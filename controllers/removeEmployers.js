const Employer = require("../models/Employer");

const removeEmployers = async ({ body }, res) => {
	const { ids: employersIds } = body;
	if (!Array.isArray(employersIds))
		return res
			.status(400)
			.json({ error: "employers ids must be provided as an array" });
	employersIds.map(async (id) => await Employer.deleteOne(id));
	res.sendStatus(204);
};
module.exports = removeEmployers;
