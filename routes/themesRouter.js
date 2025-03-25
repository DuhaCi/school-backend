import express from "express"
import themeController from "../controllers/themeController.js"

const themeRouter = express.Router();
const ThemeController = new themeController();

themeRouter.get("/themes/:id", ThemeController.getThemeById)

export default themeRouter;