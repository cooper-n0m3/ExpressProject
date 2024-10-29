import { DataTypes } from "sequelize";
import { db } from "../../config/config.js";
import { UserModel } from "./userModel.js";

export const NewsModel = db.define(
    "news",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        banner: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        view: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true 
    }
);

NewsModel.belongsTo(UserModel, { foreignKey: 'userId', targetKey: 'id' });
UserModel.hasMany(NewsModel, { foreignKey: 'userId', sourceKey: 'id' });

db.sync().then(() => {
    console.log('Models created successfully.');
}).catch(err => {
    console.error('Error creating models:', err);
});
