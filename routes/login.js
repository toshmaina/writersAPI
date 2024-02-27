const express = require("express");
const router = express.Router();
const authorise = require("../controllers/login");
const verifyJWT = require("../middleware/verifyJWT");

const loginUser = router.post("/", authorise);
module.exports = loginUser;
