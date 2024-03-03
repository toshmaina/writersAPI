const [express, updateEmployer] = [
	require("express"),
	require("../controllers/updateEmployer"),
];
const router = express.Router();
const employer = router.put("/:id", updateEmployer);
module.exports = employer;
