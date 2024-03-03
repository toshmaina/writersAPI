const [express, deactivateWriter] = [
	require("express"),
	require("../controllers/deactivateWriter"),
];
const router = express.Router();
const writer = router.patch("/:id", deactivateWriter);
module.exports = writer;
