import sequelize from "../sequelize.js";
import { Sequelize, DataTypes } from "sequelize";

const themeModel = sequelize.define("theme", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    information: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sections_id: {
        type: DataTypes.INTEGER,
    }
})

export default themeModel;