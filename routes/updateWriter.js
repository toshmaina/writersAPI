const [express, updateWriter] = [
	require("express"),
	require("../controllers/updateWriter"),
];
const router = express.Router();
const writer = router.put("/:id", updateWriter);
module.exports = writer;
