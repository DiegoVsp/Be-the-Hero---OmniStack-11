const express = require('express');
const cors = require('cors')
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); //sempre tem que vim embaixo 
app.use(errors());
/**
 * Rota / Recurso
 * */ 
/**Metodos Http:
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /* Tipos de Parâmetros
  Query Params: Parâmetros nomeados enviados na rota após "?" (filtros,paginação)
  Route Params: Parâmetros tilizados para identificar recursos
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /*
 SQL: MySql, SQlite, PostgreSQL, Oracle, Microsoft Sql Server
 NoSQL: MongoDb, etc
 */

 /*
  Drive: SELECT * FROM users
  Query Builder: table('users').select('*').where()
 */


app.listen(3333);