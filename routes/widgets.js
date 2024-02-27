import getWidgets from "../controllers/widgets";

const [express, getWidgets] = [
	require("express"),
	require("../controllers/widgets"),
];

const router = express.Router();
const widgets = router.get("/", getWidgets);
module.exports = widgets;
