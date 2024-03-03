const [express, deactivateEmployer] = [
	require("express"),
	require("../controllers/deactivateEmployer"),
];
const router = express.Router();
const employer = router.patch("/:id", deactivateEmployer);
module.exports = employer;
