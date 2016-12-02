// ------ Controller da entidade User -------

// Pega os dados de db_config.js
var db = require('../db_config.js');

// M�todo para listar todos os usu�rios
exports.list = function (callback) {

    // M�todo que pesquisa o usu�rios
    db.User.find({}, function (error, users) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel retornar os usu�rios' })
        } else {

            //Caso n�o ocorram erros, retorna a lista de usu�rios
            callback(users);
        }
    });
};

// M�todo para pesquisar um usu�rio por id
exports.user = function (_id, callback) {

    // M�todo que pesquisa o usu�rio por id
    db.User.findById(_id, function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel retornar o usu�rio' })
        } else {

            //Caso n�o ocorram erros, retorna o usu�rio 
            callback(user);
        }
    });
};

// M�todo para salvar um usu�rio
exports.save = function (_fullname, _email, _password, _created_at, callback) {

    //Salvando um usu�rio!!  
    new db.User({
        fullname: _fullname,
        email: _email,
        password: _password,
        created_at: _created_at,

    }).save(function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel inserir o usu�rio' })
        } else {

            // Caso n�o ocorram erros, retorna o usu�rio inserido
            callback(user);
        }
    });
};

// M�todo para atualizar um usu�rio
exports.update = function (_id, _fullname, _email, _password, _created_at, callback) {

    //Editando um usu�rio!!  
    db.User.findById(_id, function (error, user) {

        // Valida��o para ver se o id foi passado
        if (_id) {

            // Atualiza o objeto usu�rio em mem�ria antes de salvar no banco
            user.fullname = _fullname;
            user.email = _email;
            user.password = _password;
            user._created_at = _created_at;
        }

        // Salva o usu�rio alterado no banco
        user.save(function (error, user) {

            // Em caso de erro ao atualizar
            if (error) {

                callback('Erro ao atualizar o usu�rio');
            } else {

                // Caso n�o ocorra nenhum erro ao atualizar
                callback("Usu�rio atualizado com sucesso");
            }
        });
    });
};

// M�todo para excluir um usu�rio
exports.delete = function (_id, callback) {

    // M�todo que pesquisa o usu�rio por id para poder excluir
    db.User.findById(_id, function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'N�o foi poss�vel excluir o usu�rio' })
        } else {

            //Caso n�o ocorram erros, deleta o usu�rio 
            user.remove(function (error) {

                // Em caso de erro durante a exclus�o
                if (error) {

                } else {

                    // Caso n�o ocorram erros
                    callback("usu�rio exclu�do com sucesso!")
                }
            });
        }
    });
};