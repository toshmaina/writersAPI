const [express, updateSubscriber] = [
	require("express"),
	require("../controllers/updateSubscriber"),
];
const router = express.Router();
const subscriber = router.put("/:id", updateSubscriber);
module.exports = subscriber;
