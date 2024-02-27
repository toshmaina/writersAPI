const [express, generateApiKey] = [
	require("express"),
	require("../controllers/apiKey"),
];
const router = express.Router();

const apiKey = router.post("/", generateApiKey);
module.exports = apiKey;
