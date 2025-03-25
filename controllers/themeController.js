import themeModel from "../models/themeModel.js";


class themeController {
    getThemeById = async(request, response) => {
        try {
            const idSection = request.params.id
            const themes = await themeModel.findAll({where: {sections_id: idSection},raw: true})
            response.send(themes)
        } catch (error) {
            console.log(error.message);
            response.sendStatus(404);
        }
    }
}

export default themeController;