// Pega os dados de app_config.js
var app = require('./app_config.js');

// Pega os dados de user_controller.js
var userController = require('./controllers/user_controller.js');
// Pega os dados de instituicaoController.js
var instituicaoController = require('./controllers/instituicaoController.js');
// Pega os dados de doacao_controller.js
var doacaoController = require('./controllers/doacao_controller.js');

// Vari�vel que armazena o m�dulo validator
var validator = require('validator');

// Definindo a rota na raiz da aplica��o
app.get('/', function (req, res) {

    res.end('Servidor OK!')
});

// Definindo a rota que devolve todos os usu�rios atrav�s do m�todo GET
app.get('/users', function (req, res) {

    // Chama o m�todo list da controller
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    userController.list(function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que devolve um usu�rio atrav�s do seu ID atrav�s do m�todo GET
app.get('/users/:id', function (req, res) {

    // Capturando o id da requisi��o
    var id = validator.trim(validator.escape(req.param('id')));

    // Chama o m�todo user da controller que retorna um usu�rio atrav�s do id
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    userController.user(id, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que insere um usu�rio atrav�s do m�todo POST
app.post('/users', function (req, res) {

    var _fullname = validator.trim(validator.escape(req.param('fullname')));
    var _email = validator.trim(validator.escape(req.param('fullname')));
    var _password = validator.trim(validator.escape(req.param('fullname')));
    var _created_at = validator.trim(validator.escape(req.param('created_at')));

    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    userController.save(_fullname, _email, _password, _created_at, function (resp) {
        res.json(resp);
    });    
});

// Definindo a rota que edita um usu�rio atrav�s do m�todo PUT
app.put('/users', function (req, res) {

    var _id = validator.trim(validator.escape(req.param('id')));
    var _fullname = validator.trim(validator.escape(req.param('fullname')));
    var _email = validator.trim(validator.escape(req.param('email')));
    var _password = validator.trim(validator.escape(req.param('password')));
    var _created_at = validator.trim(validator.escape(req.param('created_at')));

    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    userController.update(_id, _fullname, _email, _password, _created_at, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que exclui um usu�rio atrav�s do m�todo PUT
app.delete('/users/:id', function (req, res) {

    // Capturando o id da reauisi��o
    var _id = validator.trim(validator.escape(req.param('id')));

    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    userController.delete(_id, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que devolve todos as instituicoes atrav�s do m�todo GET
app.get('/instituicoes', function (req, res) {

    // Chama o m�todo list da controller
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    instituicaoController.list(function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que devolve um projeto atrav�s do seu ID atrav�s do m�todo GET
app.get('/instituicoes/:id', function (req, res) {
    // Capturando o id da requisi��o
    var id = validator.trim(validator.escape(req.param('id')));
    // Chama o m�todo projeto da controller que retorna um projeto atrav�s do id
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    instituicaoController.instituicao(id, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que insere um projeto atrav�s do m�todo POST
app.post('/instituicoes', function (req, res) {
    var _descricao = validator.trim(validator.escape(req.param('descricao')));
    var _nome = validator.trim(validator.escape(req.param('nome')));
    var _data_inicio = validator.trim(validator.escape(req.param('data_inicio')));
	var _data_fim = validator.trim(validator.escape(req.param('data_fim')));
    var _created_at = validator.trim(validator.escape(req.param('created_at')));
    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    instituicaoController.save(_descricao, _nome, _data_inicio, _data_fim, _created_at, function (resp) {
        res.json(resp);		
    });    
});

// Definindo a rota que edita uma instituicao atrav�s do m�todo PUT
app.put('/instituicoes', function (req, res) {

    var _id = validator.trim(validator.escape(req.param('id')));
    var _descricao = validator.trim(validator.escape(req.param('descricao')));
    var _nome = validator.trim(validator.escape(req.param('nome')));
    var _data_inicio = validator.trim(validator.escape(req.param('data_inicio')));
	var _data_fim = validator.trim(validator.escape(req.param('data_fim')));
    var _created_at = validator.trim(validator.escape(req.param('created_at')));

    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    instituicaoController.update(_id, _descricao, _nome, _data_inicio, _data_fim, _created_at, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que insere um projeto atrav�s do m�todo POST
app.post('/doacoes', function (req, res) {
    var _descricao = validator.trim(validator.escape(req.param('descricao'))); 
    var _data_inicio = validator.trim(validator.escape(req.param('data_inicio')));
	var _data_fim = validator.trim(validator.escape(req.param('data_fim')));	
	var _id_usuario = validator.trim(validator.escape(req.param('id_usuario')));
	var _id_projeto = validator.trim(validator.escape(req.param('id_projeto')));	
    var _created_at = validator.trim(validator.escape(req.param('created_at')));

    // Chama o m�todo user da controller que insere um usu�rio
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    doacaoController.save(_descricao, _data_inicio, _data_fim,  _id_usuario, _id_projeto, _created_at, function (resp) {
        res.json(resp);
    });    
});

// Definindo a rota que retorna todas as doa��es do usu�rio atrav�s do ID
app.get('/doacoes/:id_usuario', function (req, res) {
    // Capturando o id da requisi��o
    var id_usuario = validator.trim(validator.escape(req.param('id_usuario')));

    // Chama o m�todo projeto da controller que retorna todas as doacoes do usuario
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    doacaoController.listDoacoesUsuario(id_usuario, function (resp) {
        res.json(resp);
    });
});

// Definindo a rota que devolve todas as doacoes atrav�s do m�todo GET
app.get('/doacoes', function (req, res) {

    // Chama o m�todo list da controller
    // Atrav�s de callback...PUTA QUE O PAREOO!!
    doacaoController.list(function (resp) {
        res.json(resp);
    });
});




