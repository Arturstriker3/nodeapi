
const sequelize = require('sequelize');
const database = require('../db');
const schema = "";

class Product extends sequelize.Model {}

Product.init(
    {
        Code :
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Description :
        {
            type: sequelize.STRING,
            autoIncrement: false,
            allowNull: true
        },
        CreationDate :
        {
            type: sequelize.DATE,
            allowNull: false
        },
        UpdateDate :
        {
            type: sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize: database, modelName: 'Product', schema
    }
);

database.sync()
  .then(() => {
    console.log('Tabela de Produto criada com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao criar tabela de Produto:', err);
  });

module.exports = Product;