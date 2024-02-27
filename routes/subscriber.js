const [express, getSubscriber] = [
	require("express"),
	require("../controllers/subscriber"),
];
const router = express.Router();
const subscriber = router.get("/", getSubscriber);
module.exports = subscriber;
