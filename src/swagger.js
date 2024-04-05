// swagger.js
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'Node MVC Sequelize API',
    description: 'API Node.',
  },
  host: 'localhost:3000',
  basePath: '/', // Caminho base das suas rotas
  schemes: ['https'], // Protocolo de comunicação (http, https, etc.)
};

const outputFile = './swagger-output.json';
const routes = [
    'src/routes/*.js',      // rotas
    'src/models/*.js',      // modelos
    'src/controllers/*.js'  // controladores
];

swaggerAutogen(outputFile, routes, doc);