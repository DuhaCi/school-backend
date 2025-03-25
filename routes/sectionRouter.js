import express from "express";
import sectionController from "../controllers/sectionController.js";

const sectionRouter = express.Router();
const controller = new sectionController();

sectionRouter.get("/sections", controller.getAllSections);

export default sectionRouter;