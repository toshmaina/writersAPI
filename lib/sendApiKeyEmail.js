const { Resend } = require("resend");

const sendEmail = async (apiKey, email) => {
	const API_KEY = process.env.RESEND_API_KEY;
	if (!API_KEY) return;
	const resend = new Resend(process.env.RESEND_API_KEY);

	const { error } = await resend.emails.send({
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
	//	console.log(error);
	if (error) return error;
};
module.exports = sendEmail;
