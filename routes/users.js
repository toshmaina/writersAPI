const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/users");

const users = router.get("/", getUsers);

module.exports = users;
