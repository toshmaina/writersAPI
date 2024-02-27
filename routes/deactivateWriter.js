const [express, deactivateWriter] = [
	require("express"),
	require("../controllers/deactivateWriter"),
];
const router = express.Router();
const writer = router.patch("/", deactivateWriter);
module.exports = writer;
