// ------ Controller da entidade Doacao -------

// Pega os dados de db_config.js
var db = require('../db_config.js');

// M�todo para salvar uma doacao
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
            callback({ error: 'N�o foi poss�vel efetuar a doacao' })
        } else {
            // Caso n�o ocorram erros, retorna o usu�rio inserido
            callback(doacao);
        }
    });
};

// M�todo para listar todas as doacoes do usuario
exports.listDoacoesUsuario = function (_id_Usuario, callback) {
	console.log(_id_Usuario);
    // M�todo que pesquisa as doacoes
    db.Doacao.find({'id_usuario': _id_Usuario}, function (error, doacoes) {
        // Em caso de erro! 
        if (error) {
            callback({ error: 'N�o foi poss�vel retornar os usu�rios' })
        } else {
            //Caso n�o ocorram erros, retorna a lista de usu�rios
            callback(doacoes);
        }
    });
};

// M�todo para listar todas as doacoes
exports.list = function (callback) {
    // M�todo que pesquisa o usu�rios
    db.Doacao.find({}, function (error, doacoes) {
        // Em caso de erro! 
        if (error) {
            callback({ error: 'N�o foi poss�vel retornar os usu�rios' })
        } else {
            //Caso n�o ocorram erros, retorna a lista de usu�rios
            callback(doacoes);
        }
    });
};