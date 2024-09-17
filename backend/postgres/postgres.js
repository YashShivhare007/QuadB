import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";

const sequelize = new Sequelize('quadb', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

let UserModel = null;
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been done to postgres')
        UserModel=createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database Synced")
    }
    catch (error) {
        console.error("Unable to connect to postgres", error);
    }
}

export {
    connection,
    UserModel
}