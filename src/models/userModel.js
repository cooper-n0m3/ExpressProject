import {DataTypes } from "sequelize";
import { db } from "../../config/config.js";

export const UserModel = db.define(
    'user',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { notEmpty: true, isEmail: true }
        },
        passwordHash: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: { notEmpty: true, min: 10 }
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: DataTypes.NOW
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);
UserModel.sync().then(()=>{
    console.log('User model created successfully');
}).catch((err)=>{
    console.log('Failed to creat user model');
    
})