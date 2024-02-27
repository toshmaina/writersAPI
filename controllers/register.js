const [bcrypt, User, userRoles] = [
	require("bcrypt"),
	require("../models/User"),
];

const handleNewUser = async ({ body, body: { name, password } }, res) => {
	if (!body?.name)
		return res.json({
			message: "Please send the body in the correct format.",
		});
	if (!name || !password)
		return res.json({ message: "Please enter your name and password." });

	const userExists = await User.findOne({ name }).exec();

	if (userExists) return res.sendStatus(409); //conflict

	const hashedPassword = await bcrypt.hash(password, 10);

	//create and store data in database

	const result = await User.create({
		name: name,
		password: hashedPassword,
	});

	!!result._id && res.sendStatus(201);
};

module.exports = handleNewUser;
