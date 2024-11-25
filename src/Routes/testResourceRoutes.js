const express = require('express');

const authenticate = require('../Middleware/Authenticate');
const autherizeRole = require('../Middleware/AutherizeRole');

const router = express.Router();

router.get("/moderator", authenticate, autherizeRole( "Moderator"), (_, res) => {
    res.send({message : "user LoggedIn"});
})
router.get("/admin", authenticate, autherizeRole("Admin", "Moderator"), (_, res) => {
    res.send({message : "user LoggedIn"});
});
router.get("/user", authenticate, autherizeRole("Admin", "User", "Moderator"), (_, res) => {
    res.send({message : "user LoggedIn"});
});

module.exports = router;