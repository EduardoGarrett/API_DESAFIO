// ------ Controller da entidade Doacao -------

// Pega os dados de db_config.js
var db = require('../db_config.js');

// Método para salvar uma doacao
exports.save = function (_descricao, _data_inicio, _data_fim, _id_usuario, _id_instituicao, _created_at, callback) {
    //Salvando um projeto!!  
    new db.Doacao({
        descricao: _descricao,     
		data_inicio : _data_inicio,
		data_fim : _data_fim, 
		id_usuario : _id_usuario,
		id_instituicao : _id_instituicao,		
        created_at: _created_at,
    }).save(function (error, doacao) {
        // Em caso de erro! 
        if (error) {
            callback({ error: 'Não foi possível efetuar a doacao' })
        } else {
            // Caso não ocorram erros, retorna o usuário inserido
            callback(doacao);
        }
    });
};

// Método para listar todas as doacoes do usuario
exports.listDoacoesUsuario = function (_id_Usuario, callback) {
	console.log(_id_Usuario);
    // Método que pesquisa as doacoes
    db.Doacao.find({'id_usuario': _id_Usuario}, function (error, doacoes) {
        // Em caso de erro! 
        if (error) {
            callback({ error: 'Não foi possível retornar os usuários' })
        } else {
            //Caso não ocorram erros, retorna a lista de usuários
            callback(doacoes);
        }
    });
};

// Método para listar todas as doacoes
exports.list = function (callback) {
    // Método que pesquisa o usuários
    db.Doacao.find({}, function (error, doacoes) {
        // Em caso de erro! 
        if (error) {
            callback({ error: 'Não foi possível retornar os usuários' })
        } else {
            //Caso não ocorram erros, retorna a lista de usuários
            callback(doacoes);
        }
    });
};