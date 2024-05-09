const [crypto, bcrypt, { Resend }, Developer, sendApiKeyEmail] = [
	require("crypto"),
	require("bcrypt"),
	require("resend"),
	require("../models/Developer"),
	require("../lib/sendApiKeyEmail"),
];

const generateApiKey = async ({ body }, res) => {
	if (!body) return res.sendStatus(400); //bad request
	if (!body.email) return res.json({ message: "Email is required" });
	//validate email middleware
	const { email } = body;
	const foundDeveloper = await Developer.findOne({ email }).exec();
	if (foundDeveloper) return res.sendStatus(409);
	//generate a random api key
	const apiKey = crypto.randomBytes(16).toString("hex");
	//hash the api key
	const hashedApiKey = await bcrypt.hash(apiKey, 10);
	//create and save to the database
	const result = await Developer.create({
		email,
		apiKey: hashedApiKey,
	});
	//integrate with the email services providers and send the key  to the email account

	res.cookie("apiKey", hashedApiKey, {
		maxAge: 24 * 15 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "None",
	});
	const sendEmail = await sendApiKeyEmail(hashedApiKey, email);

	return sendEmail
		? res.json({ error: sendEmail.message })
		: res
				.send({
					message: "Api key has been sent to your email account",
				})
				.status(200);
};
module.exports = generateApiKey;
