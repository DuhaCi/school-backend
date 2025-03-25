import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import sectionRouter from "./routes/sectionRouter.js";
import themeRouter from "./routes/themesRouter.js";
import questRouter from "./routes/questRouter.js";
import sequelize from "./sequelize.js";


dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())
app.use("/api", sectionRouter);
app.use("/api", themeRouter);
app.use("/api", questRouter);


const PORT = process.env.PORT || 5000;

const run = async() => {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is working on port ${PORT}`))
    } catch (error) {
        console.log(error.message)
    }
}

run();