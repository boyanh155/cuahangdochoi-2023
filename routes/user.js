const express = require("express");
const {
    login
} = require("../controllers/user");
const userRoute = express.Router();

// Login
userRoute.route("/login").post(login)

module.exports = userRoute