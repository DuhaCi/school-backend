import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const sectionModel = sequelize.define("section", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    header: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptionSection: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default sectionModel;