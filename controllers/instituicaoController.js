// ------ Controller da entidade Projeto -------

// Pega os dados de db_config.js
var db = require('../db_config.js');

// M�todo para listar todos os projetos
exports.list = function (callback) {

    // M�todo que pesquisa o usu�rios
    db.Instituicao.find({}, function (error, instituicoes) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel retornar os projetos' })
        } else {

            //Caso n�o ocorram erros, retorna a lista de usu�rios
            callback(instituicoes);
        }
    });
};

// M�todo para pesquisar uma instituicao por id
exports.instituicao = function (_id, callback) {

    // M�todo que pesquisa o usu�rio por id
    db.Instituicao.findById(_id, function (error, instituicao) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel retornar a instituicao' })
        } else {

            //Caso n�o ocorram erros, retorna o instituicao 
            callback(instituicao);
        }
    });
};

// M�todo para salvar um projetos
exports.save = function (_descricao, _nome, _data_inicio, _data_fim, _created_at, callback) {
	
    //Salvando um projeto!!  
    new db.Instituicao({
        descricao: _descricao,
        nome: _nome,
		data_inicio : _data_inicio,
		data_fim : _data_fim,      
	
        created_at: _created_at,
    
    }).save(function (error, instituicao) {
    
        // Em caso de erro! 
        if (error) {
			console.log(error)
            callback({ error: 'N�o foi poss�vel inserir a instituicao' })
        } else {
            // Caso n�o ocorram erros, retorna o usu�rio inserido
            callback(instituicao);
        }
    });
};

// M�todo para atualizar um projeto
exports.update = function (_id, _descricao, _nome, _data_inicio, _data_fim , _created_at, callback) {
	
    //Editando uma instituicao!!  
    db.Instituicao.findById(_id, function (error, instituicao) {
	
        // Valida��o para ver se o id foi passado
        if (_id) {

            // Atualiza o objeto usu�rio em mem�ria antes de salvar no banco
            instituicao.descricao = _descricao;
            instituicao.nome = _nome;
            instituicao.data_inicio = _data_inicio;
            instituicao.data_fim = _data_fim;	
			instituicao._created_at = _created_at;			
        }		

        // Salva a instituicao alterado no banco
        instituicao.save(function (error, instituicao) {
        
            // Em caso de erro ao atualizar
            if (error) {			
                callback('Erro ao atualizar a instituicao');
            } else {
        
                // Caso n�o ocorra nenhum erro ao atualizar
                callback("Instituicao atualizado com sucesso");
            }
        });
    });
};
