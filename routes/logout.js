const express = require("express");
const router = express.Router();
const logout = require("../controllers/logout");

const logoutUser = router.get("/", logout);
module.exports = logoutUser;
