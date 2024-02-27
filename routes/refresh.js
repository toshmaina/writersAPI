const [express, handleRefreshToken] = [
	require("express"),
	require("../controllers/refresh"),
];
const router = express.Router();
const generateAccessTokenFromRefreshToken = router.get("/", handleRefreshToken);
module.exports = generateAccessTokenFromRefreshToken;
