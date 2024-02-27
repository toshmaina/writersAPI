const [express, removeEmployers] = [
	require("express"),
	require("../controllers/removeEmployers"),
];
const router = express.Router();
const employer = router.delete("/", removeEmployers);
module.exports = employer;
