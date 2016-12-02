// ------ Configurações do banco de dados MONGO -------

// Connection string
var db_string = 'mongodb://127.0.0.1/api_desafio';

// Varável que armazena o módulo mongoose e conecta ao banco utilizando a connection string
var mongoose = require('mongoose').connect(db_string);

// Variável que carrega a instância da conexão
var db = mongoose.connection;

// Em caso de erro na conexão ao banco
db.on('error', console.error.bind(console, "erro na conexão ao banco"));

// Quando conectar ao banco 
db.once('open', function () {
    // Definindo o Schema (esquema) para a entidade USER
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
		imei: String,
        created_at: Date,
    })
	
	
	// Definindo o Schema (esquema) para a entidade PROJETO
    var projetoSchema = mongoose.Schema({		
		nome: String,
        descricao: String,       
        //created_at: Date,
    })
	
	
	// Definindo o Schema (esquema) para a entidade INSTITUICAO
    var instituicaoSchema = mongoose.Schema({
        descricao: String,
        nome: String,
        data_inicio: Date,
		data_fim: Date,
        created_at: Date,
    })
	

	// Definindo o Schema (esquema) para a entidade doacao
    var doacaoSchema = mongoose.Schema({
        descricao: String,        
        data_inicio: Date,
		data_fim: Date,
		id_usuario: String,
		id_projeto: String,
        created_at: Date,
    })
	

    // Associando os Schemas (esquema) aos models 
    // exports expõe toda essa classe ao mundo externo
    exports.User = mongoose.model('User', userSchema);
	exports.Instituicao = mongoose.model('Instituicao', instituicaoSchema);
	exports.Doacao = mongoose.model('Doacao', doacaoSchema);
	exports.Projeto = mongoose.model('Projeto', projetoSchema);
})

