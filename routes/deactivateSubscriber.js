const [express, deactivateSubscriber] = [
	require("express"),
	require("../controllers/deactivateSubscriber"),
];
const router = express.Router();
const subscriber = router.patch("/", deactivateSubscriber);
module.exports = subscriber;
