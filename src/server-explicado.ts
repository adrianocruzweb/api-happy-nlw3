import express from 'express';
//requisições e respostas no node com express

const app = express();
//recurso usuarios da rota /users
/***
 * Métodos http = GET, POST, PUT, DELETE
 * Parâmetros =  01 - Query Params: http://localhost:3333/users:search=diego&page=2
 * Parâmetros =  02 - Route Params: http://localhost:3333/users/1(Identificar um recurso)
 * Parâmetros =  03 - Body: json {'name':'Baleia'}
 */

//por padrão o express não entende json por isso é necessario aplicar esse 'plugin'
app.use(express.json());

//rota get users
app.get('/users',(request,response)=>{
    //imprime no console todos os parametros na url
    console.log(request.query);
    //exibe o texto teste no console ao executar a rota
    console.log('teste'); 
    //retorna uma resposta em json -> objeto message contendo o texto hello world dentro
    return response.json({message:'hello world'});
});

//rota get users
app.post('/users',(request,response)=>{
    //imprime no console todos os parametros na url
    console.log(request.query);
    //imprime no console todos os parametros na estrutura da url
    console.log(request.params);
    //imprime no console todos os parametros no body da requisição vem em json por isso tem que aplicar o plugin
    console.log(request.body);
    //exibe o texto teste no console ao executar a rota
    console.log('teste'); 
    //retorna uma resposta em json -> objeto message contendo o texto hello world dentro
    return response.json({message:'hello world'});
});

//porta de acesso para as requisições http
app.listen(3334);

/**
 * Banco de Dados na API
 * 01 - Driver Nativo SQLITE3 sem abstração
 *      escrever da forma que se usa no banco 
 *      sqlite.query('SELECT * FROM users') 'exemplo'
 * 02 - Query Builder Knex.js (usando js) - Troca de banco de dados sem mexer na aplicação 
 *      knex('users').select('*').where('name','Adriano')
 * 03 - ORM - Classe na aplicação  - Troca de banco de dados sem mexer na aplicação
 *      Automaticamente o resultado é um objeto que é instancia.
 */