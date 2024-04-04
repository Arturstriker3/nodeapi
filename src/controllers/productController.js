
const ModelProcuct = require('../models/product');

module.exports = {

    async List(req, res) {
        try {
            const products = await ModelProcuct.findAll();
            return res.json(products);

        } catch (error) {
            return console.error("Erro na List : ", error);
        }
    },

    async Create(req, res) {
        try {
            const products = await ModelProcuct.create(
                {
                    Code: req.body.Code,
                    Description: req.body.Description,
                    CreationDate: req.body.CreationDate,
                    updateDate: null
                });
            return res.json(products);

        } catch (error) {
            return console.error("Erro no Create : ", error);
        }
    },

    async Update(req, res) {
        try {

            const prod = await ModelProcuct.findByPk(req.body.Code);
            if (prod) {
                prod.Description = req.body.Description;
                prod.UpdateDate = new Date();
                await prod.save();
            }

            return res.json(prod);

        } catch (error) {
            return console.error("Erro no Update : ", error);
        }
    },

    async getOne(req, res) {
        try {

            const prod = await ModelProcuct.findByPk(req.body.Code);

            return res.json(prod);

        } catch (error) {
            return console.error("Produto não Encontrado : ", error);
        }
    },

    async Delete(req, res) {
        try {

            const prod = await ModelProcuct.findByPk(req.body.Code);
            await prod.destroy();

            return res.json(prod);

        } catch (error) {
            return console.error("Erro na Remoção : ", error);
        }
    },
}