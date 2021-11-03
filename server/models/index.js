const {Sequelize} = require("sequelize");

const { PG_URI } = process.env;

const PG_URL = PG_URI;

const sequelize = new Sequelize(PG_URL) 
const db = {};

db.Sequelize = Sequelize;

db.Employees = require("./Employees.js")(sequelize, Sequelize);

module.exports = db;