const [express, removeSubscribers] = [
	require("express"),
	require("../controllers/removeSpecificSubscribers"),
];
const router = express.Router();
const subscriber = router.delete("/", removeSubscribers);
module.exports = subscriber;
