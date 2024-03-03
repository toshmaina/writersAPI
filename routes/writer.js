const [express, getWriter] = [
	require("express"),
	require("../controllers/writer"),
];
const router = express.Router();
const writer = router.get("/:id", getWriter);
module.exports = writer;
