const express = require("express");
const router = express.Router();
const { getHomeRoute } = require("../controllers/home");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getHomeRoute);

module.exports = router;
