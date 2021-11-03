//const employees = require('./employee.json')

const db = require("../models");

const { Employees } = db;

const getEmployeesList = async(req,res) =>{
    const employees = await Employees.findAll({  
    });
    return res.json({success:true, employees})
}

module.exports = { getEmployeesList}