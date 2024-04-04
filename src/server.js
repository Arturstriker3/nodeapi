const express = require('express');
const api = express();
const routes = require('./router'); // Corrigindo o caminho de importação

api.use(express.json());
api.use(routes);

api.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
