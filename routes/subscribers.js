const getSubscribers = require("../controllers/subscribers");
const express = require("express");
const router = express.Router();

const subscribers = router.get("/", getSubscribers);
module.exports = subscribers;
