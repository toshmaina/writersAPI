const [express, removeEmployer] = [
	require("express"),
	require("../controllers/removeEmployer"),
];
const router = express.Router();
const employer = router.delete("/", removeEmployer);
module.exports = employer;
