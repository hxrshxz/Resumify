const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/skills", UserController.getSkills);
router.post("/user", UserController.createUser);
router.get("/all", UserController.getAllData);

module.exports = router;
