const [crypto, bcrypt, { Resend }, Developer] = [
	require("crypto"),
	require("bcrypt"),
	require("resend"),
	require("../models/Developer"),
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
	const result = await Developer.create({ email, apiKey: hashedApiKey });

	//integrate with the email services providers and send the key  to the email account
	//OR

	res.cookie("apiKey", hashedApiKey, {
		maxAge: 24 * 15 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "None",
	});
	const API_KEY = process.env.RESEND_API_KEY;
	if (!API_KEY) return;
	const resend = new Resend(process.env.RESEND_API_KEY);
	const extractName = email
		.split("@")[1]
		.split()
		.filter((el) => !isNaN(el));

	try {
		const { error, data } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [email],
			subject: "WRITERS API KEY",
			text: `Subject: Your API Key Access Details

Dear Developer,

We're thrilled to provide you with access to our API services!
As requested, here are the details you need to start
integrating our API into your projects:

API KEY: ${apiKey}

Please keep your API key secure and do not share it publicly.
This key is unique to your account and grants access to our API services.
If you believe your API key has been compromised, please let us know
immediately so we can take appropriate action to secure your account.

If you have any questions or need assistance with integrating our API,
don't hesitate to reach out to our support team at mainajames16972@gmail.com.

Happy coding🎉!

Best regards,
Maina`,
		});
		if (error) throw new Error(error);
		res.sendStatus(201);
	} catch (error) {
		res.json(error);
	}
};
module.exports = generateApiKey;
