const [express, getWriter] = [
	require("express"),
	require("../controllers/writer"),
];
const router = express.Router();
const writer = router.get("/", getWriter);
module.exports = writer;
