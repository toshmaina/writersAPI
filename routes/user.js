const [express, getUser] = [require("express"), require("../controllers/user")];
const router = express.Router();
const user = router.get("/:id", getUser);
module.exports = user;
