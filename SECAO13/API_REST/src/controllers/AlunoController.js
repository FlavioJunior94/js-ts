import Aluno from "../models/Aluno";

class AlunoController {
    async index(req, res) {
        res.json('OK');
    }
}

export default new AlunoController();