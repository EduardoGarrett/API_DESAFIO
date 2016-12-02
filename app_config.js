// ------ Configura��es da aplica��o -------

// Vari�vel que armazena o m�dulo EXPRESS da aplica��o
var express = require('express');

// Cria uma inst�ncia do express dentro da vari�vel app
// module.exports deixa essa vari�vel p�blica
var app = module.exports = express();

// Vari�vel que armazena o m�dulo body-parser (para poder trabalhar com JSON)
var bodyParser = require('body-parser');

var allowCors = function (req, res, next) {

    // Diz quem pode fazer as requisi��es
    // Pode ser passada uma lista de dom�nios da seguinte forma:
    // res.header('Acess-Controll-Allow-Origin', '127.0.0.1:5000, www.sitepermitido.com.br, teste.com.br'); 
	
    //res.header('Acess-Controll-Allow-Origin', '127.0.0.1:5000');
	//res.header('Acess-Controll-Allow-Origin', '127.0.0.1:49504');
	res.header('Acess-Controll-Allow-Origin', '*');
	//res.header('Acess-Controll-Allow-Origin', '192.168.249.248');
    // M�todos permitidos
    res.header('Acess-Controll-Allow-Methods', 'GET,POST,PUT,DELETE');

    // Headers adicionais
    res.header('Acess-Controll-Allow-Headers', 'Content-Type');
    res.header('Acess-Controll-Allow-Credentials', 'true');
	
	
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	

    next();
}

// Definindo a porta que a aplica��o ir� escutar
app.listen(5000);

// Uso dos m�todos de seguran�a
app.use(allowCors);

// Configura��o do encode dos parametros
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configurando a aplica��o para utilizar o m�dulo body parser
app.use(bodyParser.json());