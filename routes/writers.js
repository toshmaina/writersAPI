const [express, getWriters] = [
	require("express"),
	require("../controllers/writers"),
];

const router = express.Router();
const getWritersDetails = router.get("/", getWriters);
module.exports = getWritersDetails;
