import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const questModel = sequelize.define("question", {
    quest_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quest_header: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quest_path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quest_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quest_answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quest_info: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default questModel;