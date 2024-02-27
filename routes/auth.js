const [express, path, data, PORT] = [
	require("express"),
	require("path"),
	require("../data/auth.json"),
	process.env.PORT || 8080,
];

const router = express.Router();
const getCredencials = router.post("/", (req, res) => {
	console.log(req?.body);
	res.json(data);
});
module.exports = getCredencials;
