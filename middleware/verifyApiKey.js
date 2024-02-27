const Developer = require("../models/Developer");

const verifyApiKey = async ({ cookies }, res, next) => {
	const apiKey = cookies?.["apiKey"];
	if (!apiKey) return res.sendStatus(401);
	const foundDeveloper = await Developer.findOne({ apiKey });
	if (!foundDeveloper) return res.sendStatus(403); //forbidden , the api key must have been tampered with
	const { email } = foundDeveloper;
	console.log(`email ${email} has been verified`);
	next();
};
module.exports = verifyApiKey;
