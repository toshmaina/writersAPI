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
	roles: {
		user: {
			type: Number,
			default: 2001,
		},
		admin: Number,
		editor: Number,
	},

	refreshToken: String,
});
module.exports = model("User", userSchema);
