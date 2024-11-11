const { isAuth, isAdmin } = require('../../middlewares/auth')
const { getProducts, postProducts, putProdcuts, deleteProducts } = require('../controllers/products')

const productsRouter = require('express').Router()

productsRouter.get('/', getProducts)
productsRouter.post('/', [isAuth], postProducts)
productsRouter.put('/:id', [isAuth], putProdcuts)
productsRouter.delete('/:id', [isAuth], deleteProducts)
module.exports = productsRouter
