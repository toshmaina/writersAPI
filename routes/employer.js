const [express, getEmployer] = [
	require("express"),
	require("../controllers/employer"),
];
const router = express.Router();
const employer = router.get("/", getEmployer);
module.exports = employer;
