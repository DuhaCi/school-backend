import { Sequelize } from "sequelize";
import { config } from "dotenv";
config()

const sequelize = new Sequelize(process.env.DB_NAME, "root", process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
})

export default sequelize;