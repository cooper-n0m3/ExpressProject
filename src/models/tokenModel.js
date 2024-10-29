import { DataTypes } from "sequelize";
import { db } from "../../config/config.js";
import { UserModel } from "./userModel.js";
export const TokenModel = db.define(
    'token_tb',
    {
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model: UserModel,
                key:'id',
            }
        },
        token:{
            type:DataTypes.TEXT,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        expiresAt:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },{
        freezeTableName:true,
        createdAt:true,
        updatedAt:true
    })
    UserModel.hasMany(TokenModel,{foreignKey:'userId',as:'tokens'});
    TokenModel.belongsTo(UserModel,{foreignKey:'userId',as:'user'});

    TokenModel.sync().then(()=>{
        console.log('TokenModel created successfully.');
        
    }).catch((err)=>{
        console.log('TokenModel created failed.');
    })