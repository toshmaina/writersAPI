const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},

	refreshToken: String,
});
module.exports = model("User", userSchema);
