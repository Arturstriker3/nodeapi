const express = require('express');
const api = express();
const routes = require('./routes/router');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

api.use(express.json());
api.use(routes);

// Documentação
api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

api.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
