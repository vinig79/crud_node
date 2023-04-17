import {Sequelize, DataTypes} from 'sequelize';
import mysql2 from 'mysql2';

class Database{
    constructor() {
        this.connection = new Sequelize("sql10612503","sql10612503","UfHgGTvcIt",{host:"sql10.freemysqlhosting.net",dialect:"mysql", dialectModule:mysql2});
        this.models = {};
        this.createTables();
    };

    async authentication() {
        try{
            await this.connection.authenticate();
            console.log("Success");
        } catch(err) {
            console.error(`o erro dado foi ${err}`);
        };
    };
    
    async createTables() {

        this.models.User = this.connection.define('user', {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome:{
                type: DataTypes.STRING,
                allownull: false
            },
            email:{
                type: DataTypes.STRING,
                allownull: false
            },
            senha:{
                type: DataTypes.STRING,
                allownull: false
            }
            
        },
        {
            tableName: "user"
        });

       

        this.models.Post = this.connection.define('post', {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            post:{
                type: DataTypes.STRING(500),
                allownull: false
            },
        },
        {
            tableName:"post"
        });

    
        this.models.User.hasMany(this.models.Post, { foreignKey: "usId", onDelete:"CASCADE"});
        this.models.Post.belongsTo(this.models.User, { foreignKey: "usId"});

        await this.models.User.sync();
        await this.models.Post.sync();
        
        
        
    };

    
};

const db = new Database();
console.log(db.models)

export default db;