const { Schema, model } = require("mongoose");

const developerSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	apiKey: {
		type: String,
		required: true,
	},
});
module.exports = model("Developer", developerSchema);
