import sectionModel from '../models/sectionModel.js';


class sectionController {
    getAllSections = async (request, response) => {
        try {
            const sections = await sectionModel.findAll({raw: true})
            response.send(sections)
        } catch (error) {
            console.log(error.message);
            response.sendStatus(404);
        }
    };
}

export default sectionController;