const express = require("express");
const router = express.Router();
const handleUser = require("../controllers/register");

const handleNewUser = router.post("/", handleUser);

module.exports = handleNewUser;
