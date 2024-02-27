const [express, updateEmployer] = [
	require("express"),
	require("../controllers/updateEmployer"),
];
const router = express.Router();
const employer = router.put("/", updateEmployer);
module.exports = employer;
