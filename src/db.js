const Sequelize = require('sequelize');
require('dotenv').config();

const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

database.authenticate()
  .then(() => {
    console.log('Conexão bem sucedida com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = database;