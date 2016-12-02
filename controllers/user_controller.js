// ------ Controller da entidade User -------

// Pega os dados de db_config.js
var db = require('../db_config.js');

// Método para listar todos os usuários
exports.list = function (callback) {

    // Método que pesquisa o usuários
    db.User.find({}, function (error, users) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'Não foi possível retornar os usuários' })
        } else {

            //Caso não ocorram erros, retorna a lista de usuários
            callback(users);
        }
    });
};

// Método para pesquisar um usuário por id
exports.user = function (_id, callback) {

    // Método que pesquisa o usuário por id
    db.User.findById(_id, function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'Não foi possível retornar o usuário' })
        } else {

            //Caso não ocorram erros, retorna o usuário 
            callback(user);
        }
    });
};

// Método para salvar um usuário
exports.save = function (_fullname, _email, _password, _created_at, callback) {

    //Salvando um usuário!!  
    new db.User({
        fullname: _fullname,
        email: _email,
        password: _password,
        created_at: _created_at,

    }).save(function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'Não foi possível inserir o usuário' })
        } else {

            // Caso não ocorram erros, retorna o usuário inserido
            callback(user);
        }
    });
};

// Método para atualizar um usuário
exports.update = function (_id, _fullname, _email, _password, _created_at, callback) {

    //Editando um usuário!!  
    db.User.findById(_id, function (error, user) {

        // Validação para ver se o id foi passado
        if (_id) {

            // Atualiza o objeto usuário em memória antes de salvar no banco
            user.fullname = _fullname;
            user.email = _email;
            user.password = _password;
            user._created_at = _created_at;
        }

        // Salva o usuário alterado no banco
        user.save(function (error, user) {

            // Em caso de erro ao atualizar
            if (error) {

                callback('Erro ao atualizar o usuário');
            } else {

                // Caso não ocorra nenhum erro ao atualizar
                callback("Usuário atualizado com sucesso");
            }
        });
    });
};

// Método para excluir um usuário
exports.delete = function (_id, callback) {

    // Método que pesquisa o usuário por id para poder excluir
    db.User.findById(_id, function (error, user) {

        // Em caso de erro! 
        if (error) {

            callback({ error: 'Não foi possível excluir o usuário' })
        } else {

            //Caso não ocorram erros, deleta o usuário 
            user.remove(function (error) {

                // Em caso de erro durante a exclusão
                if (error) {

                } else {

                    // Caso não ocorram erros
                    callback("usuário excluído com sucesso!")
                }
            });
        }
    });
};