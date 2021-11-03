const express = require("express");

const { getEmployeesList } = require("./appController");

const router = express.Router();

router.get("/list",getEmployeesList);


module.exports = router;