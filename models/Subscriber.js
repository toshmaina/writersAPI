const { Schema, model } = require("mongoose");

const subscriberSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	subscribedAt: {
		type: Date,
		required: true,
	},
	expiryDate: {
		type: Date,
		required: true,
	},
	amount: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	},
});
module.exports = model("Subscriber", subscriberSchema);
