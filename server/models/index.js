const {Sequelize} = require("sequelize");

const { PG_URI } = process.env;

const PG_URL = PG_URI;

const sequelize = new Sequelize(PG_URL) 
const db = {};

db.Sequelize = Sequelize;

db.Employees = require("./Employees.js")(sequelize, Sequelize);
db.Meetings = require('./Meetings.js')(sequelize,Sequelize);
db.Feedbacks = require('./Feedbacks')(sequelize,Sequelize);
db.ActionItems = require('./ActionItems')(sequelize,Sequelize);

module.exports = db;