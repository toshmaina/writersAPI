const Developer = require("../models/Developer");

const verifyApiKey = async ({ cookies, body }, res, next) => {
	const [apiKeyFromCookie, apiKeyFromBody] = [
		cookies?.["apiKey"],
		body?.apiKey,
	];
	if (!apiKeyFromCookie && !apiKeyFromBody)
		return res
			.send({ message: "apiKey is required in the request body" })
			.status(400);

	const foundDevelopers = await Promise.allSettled([
		Developer.findOne({ apiKeyFromBody }).exec(),
		Developer.findOne({ apiKeyFromCookie }).exec(),
	]);
	const oneFoundDeveloper = foundDevelopers.find(
		(developer) => !!developer.value
	);
	if (!oneFoundDeveloper) return res.sendStatus(403); //forbidden , the api key must have been tampered with

	const {
		value: { email, apiKey },
	} = oneFoundDeveloper;
	//console.log(foundDevelopers);
	//console.log(`email ${email} has been verified`);
	console.log(apiKey);

	!apiKeyFromCookie &&
		res.cookie("apiKey", apiKey, {
			maxAge: 24 * 15 * 60 * 60 * 1000,
			httpOnly: true,
			sameSite: "None",
		});
	next();
};
module.exports = verifyApiKey;
