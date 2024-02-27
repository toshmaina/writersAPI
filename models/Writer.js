const { Schema, model } = require("mongoose");

const writerSchema = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	idNumber: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	active: { type: Boolean, required: true },
});
module.exports = model("Writer", writerSchema);
