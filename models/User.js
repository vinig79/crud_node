const db = require("./db")
const sq = require("sequelize")

const User = db.define(
    'user',{
        id:{
            type: sq.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome:{
            type: sq.STRING,
            allownull: false
        },
        email:{
            type: sq.STRING,
            allownull: false
        },
        senha:{
            type: sq.STRING,
            allownull: false
        }
        
    },
    {
        tableName: "user"
    }
)


User.sync();



module.exports = User;