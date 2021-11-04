const express = require("express");

const { getEmployeesList , getMeetingsList, getFeedbacksList, getActionItemsList } = require("./appController");

const router = express.Router();

router.get("/list",getEmployeesList);
router.get('/meetings', getMeetingsList);
router.get('/feedbacks',getFeedbacksList);
router.get('/actionItems',getActionItemsList)

module.exports = router;