const { isAdmin, isAuth } = require('../../middlewares/auth')
const { getBrands, postBrand, putBrand, deleteBrand } = require('../controllers/brands')

const brandsRouter = require('express').Router()

brandsRouter.get('/', getBrands)
brandsRouter.post('/', [isAuth], postBrand)
brandsRouter.put('/:id', [isAuth], putBrand)
brandsRouter.delete('/:id', [isAuth], deleteBrand)

module.exports = brandsRouter
