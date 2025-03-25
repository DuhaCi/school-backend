import express from 'express'
import questController from '../controllers/questController.js'

const questRouter = express.Router();
const controller = new questController();

questRouter.get("/quests/:header", controller.getQuestByHeader);

export default questRouter;
