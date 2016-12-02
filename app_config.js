// ------ Configurações da aplicação -------

// Variável que armazena o módulo EXPRESS da aplicação
var express = require('express');

// Cria uma instância do express dentro da variável app
// module.exports deixa essa variável pública
var app = module.exports = express();

// Variável que armazena o módulo body-parser (para poder trabalhar com JSON)
var bodyParser = require('body-parser');

var allowCors = function (req, res, next) {

    // Diz quem pode fazer as requisições
    // Pode ser passada uma lista de domínios da seguinte forma:
    // res.header('Acess-Controll-Allow-Origin', '127.0.0.1:5000, www.sitepermitido.com.br, teste.com.br'); 
	
    //res.header('Acess-Controll-Allow-Origin', '127.0.0.1:5000');
	//res.header('Acess-Controll-Allow-Origin', '127.0.0.1:49504');
	res.header('Acess-Controll-Allow-Origin', '*');
	//res.header('Acess-Controll-Allow-Origin', '192.168.249.248');
    // Métodos permitidos
    res.header('Acess-Controll-Allow-Methods', 'GET,POST,PUT,DELETE');

    // Headers adicionais
    res.header('Acess-Controll-Allow-Headers', 'Content-Type');
    res.header('Acess-Controll-Allow-Credentials', 'true');
	
	
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	

    next();
}

// Definindo a porta que a aplicação irá escutar
app.listen(5000);

// Uso dos métodos de segurança
app.use(allowCors);

// Configuração do encode dos parametros
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configurando a aplicação para utilizar o módulo body parser
app.use(bodyParser.json());