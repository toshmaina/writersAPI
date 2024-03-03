const [express, getSubscriber] = [
	require("express"),
	require("../controllers/subscriber"),
];
const router = express.Router();
const subscriber = router.get("/:id", getSubscriber);
module.exports = subscriber;
