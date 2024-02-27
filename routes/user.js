const [express, getUser] = [require("express"), require("../controllers/user")];
const router = express.Router();
const user = router.get("/", getUser);
module.exports = user;
