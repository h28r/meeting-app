const {Sequelize} = require("sequelize");

const { PG_URI } = process.env;

const PG_URL = PG_URI;

const sequelize = new Sequelize(PG_URL) 
const db = {};

db.Sequelize = Sequelize;

db.Employees = require("./Employee.js")(sequelize, Sequelize);
db.Meetings = require('./Meeting.js')(sequelize,Sequelize);
db.Feedbacks = require('./Feedback')(sequelize,Sequelize);
db.ActionItems = require('./ActionItem')(sequelize,Sequelize);

module.exports = db;