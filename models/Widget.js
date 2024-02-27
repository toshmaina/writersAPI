const { Schema, model } = require("mongoose");
const widgetSchema = new Schema({
	subsriptionOverviews: {
		type: Object,
		required: true,
	},

	recentSubscriptions: {
		type: Object,
		required: true,
	},

	employers: {
		type: Object,
		required: true,
	},

	writers: {
		type: Object,
		required: true,
	},

	subscriptions: {
		type: Object,
		required: true,
	},

	orders: {
		type: Object,
		required: true,
	},

	summary: {
		type: Object,
		required: true,
	},

	budget: {
		type: Object,
		required: true,
	},
	previousStatement: {
		type: Object,
		required: true,
	},

	currentStatement: {
		type: Object,
		required: true,
	},
});
module.exports = model("Widget", widgetSchema);
