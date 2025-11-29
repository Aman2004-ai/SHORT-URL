const express = require("express");
const URL = require("../models/url");
const { getUser } = require("../service/auth");

const router = express.Router();
router.get('/', async (req, res) => {
     const allurls = await URL.find({});
     const token = req.cookies && req.cookies.uid;
     const user = token ? getUser(token) : null;
    return res.render("home", {
        urls: allurls,
        user: user,
    });
});

router.get('/signup', (req, res) => {
    return res.render("signup");
});

router.get('/login', (req, res) => {
    return res.render("login");
});
module.exports = router;