const db = require("../models");

const { Employees , Meetings , Feedbacks ,ActionItems  } = db;

const getEmployeesList = async(req,res) =>{
    const employees = await Employees.findAll({  
    });
    return res.json({success:true, employees})
}

const getMeetingsList = async(req,res) =>{
    const meetings = await Meetings.findAll({});
    return res.json(meetings)
}

const getFeedbacksList = async (req,res) =>{
    const feedbacks = await Feedbacks.findAll({});
    return res.json({success:true,feedbacks})
}

const getActionItemsList = async (req,res) =>{
    const actionItems = await ActionItems.findAll({});
    return res.json({success:true,actionItems})
}
module.exports = { getEmployeesList ,getMeetingsList ,getFeedbacksList , getActionItemsList}