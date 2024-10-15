import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Flavio',
            sobrenome: 'Santos',
            email: 'flavio@email.com',
            idade: 29,
            peso: 80,
            altura:1.80
        });
        res.json(novoAluno);
    }
}

export default new HomeController();