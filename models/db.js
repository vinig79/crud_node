const Sequelize = require('sequelize');
const db = new Sequelize("node","vinig79","vinig79",{host:"localhost",dialect:"mysql"});

module.exports = db