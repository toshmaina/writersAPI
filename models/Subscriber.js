const { Schema, model } = require("mongoose");

const subscriberSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
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
		type: Number,
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
