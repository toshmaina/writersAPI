const [express, getEmployer] = [
	require("express"),
	require("../controllers/employer"),
];
const router = express.Router();
const employer = router.get("/:id", getEmployer);
module.exports = employer;
