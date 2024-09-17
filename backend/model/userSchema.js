import { DataTypes } from "sequelize";

export const createUserModel=(sequelize)=>{
    const User=sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
            allowNull : false
        },
        last:{
            type:DataTypes.STRING,
            allowNull : false
        },
        buy:{
            type:DataTypes.STRING,
            allowNull : false
        },
        sell:{
            type:DataTypes.STRING,
            allowNull : false
        },
        volume:{
            type:DataTypes.STRING,
            allowNull : false
        },
        base_unit:{
            type:DataTypes.STRING,
            allowNull : false
        }
    });
    return User;
}