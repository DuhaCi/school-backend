
import questModel from "../models/questModel.js";


// Поиск заданий по определенной теме

class questController {
    getQuestByHeader = async(request, response) => {
        try {
            const quests = await questModel.findAll({where: {quest_header: request.params.header}, raw: true})
            response.send(quests)
        } catch (error) {
            console.log(error.message);
            response.sendStatus(404)
        }
    }
}

export default questController;