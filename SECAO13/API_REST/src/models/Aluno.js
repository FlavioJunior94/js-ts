import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue:'',
                validate: {
                    len: {
                        args: [3,255],
                        msg: 'Nome precisa ter entre 3 e 255 caracgteres'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue:'',
                validate: {
                    len: {
                        args: [3,255],
                        msg: 'sobrenome precisa ter entre 3 e 255 caracgteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue:'',
                unique:{
                    msg: 'Email já existe.'
                },
                validate: {
                    isEmail:{
                        msg: 'Email invalido.'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue:'',
                validate: {
                    isInt:{
                        msg: 'Idade precisa ser um numero inteiro.'
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue:'',
                validate: {
                    isFloat:{
                        msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante.'
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue:'',
                validate: {
                    isFloat:{
                        msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante.'
                    }
                }
            }
        },{
            sequelize,
        });
        return this;
    }
}