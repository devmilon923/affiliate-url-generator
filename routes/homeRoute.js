const express = require("express");
const { showAllUrls } = require("../controllers/home");
const { auth, role } = require("../middlewares/auth.js");
const route = express.Router();

route.get("/", auth, role(["NORMAL", "ADMIN"]), showAllUrls);

module.exports = route;
