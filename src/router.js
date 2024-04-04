
const express = require('express');
const controllerProduct = require('./controllers/productController');

const routes = express.Router();

routes.get('/List', controllerProduct.List);
routes.post('/Create', controllerProduct.Create);
routes.put('/Update', controllerProduct.Update);
routes.get('/getOne', controllerProduct.getOne);
routes.post('/Delete', controllerProduct.Delete);

module.exports = routes;