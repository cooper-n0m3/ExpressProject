import { DataTypes } from "sequelize";
import { db } from "../../config/config.js";
export const modelTesting = db.define(
    'testDB',{
        googleid:DataTypes.TEXT,
        email: {
            type:DataTypes.STRING,
            validate:{
                isEmail:true
            },
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        }
},
{
    freezeTableName:true,
    createdAt:true,
    updatedAt:true
})
modelTesting.sync().then(()=>{
    console.log('modelTesting created successfully.');
}).catch((err)=>{
    console.log('modelTesting created failed.');
})