const db = require("./db");
const sq = require("sequelize")
const User = require("./User.js");

const Post = db.define(
    'post',{
        id:{
            type: sq.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        post:{
            type: sq.STRING(500),
            allownull: false
        },
    },
    {
        tableName:"post"
    }
);


User.hasMany(Post, { foreignKey: "usId", onDelete:"CASCADE"})
Post.belongsTo(User, { foreignKey: "usId"});



Post.sync();


module.exports = Post;