const [express, handleEmployers] = [
	require("express"),
	require("../controllers/employers"),
];

const router = express.Router();
const getEmployers = router.get("/", handleEmployers);
module.exports = getEmployers;
