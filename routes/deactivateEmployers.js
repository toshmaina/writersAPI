const [express, deactivateEmployers] = [
	require("express"),
	require("../controllers/deactivateEmployers"),
];
const router = express.Router();
const employer = router.patch("/", deactivateEmployers);
module.exports = employer;
