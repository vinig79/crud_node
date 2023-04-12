const Sequelize = require('sequelize');
const db = new Sequelize("sql10612503","sql10612503","UfHgGTvcIt",{host:"sql10.freemysqlhosting.net",dialect:"mysql", dialectModule: require('mysql2')});

module.exports = db;